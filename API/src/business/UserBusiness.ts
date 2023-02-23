import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidPassword, UserNotExist } from '../errors/CustomError'
import { user, SignupDTO, LoginInputDTO } from '../models/User'
import Authorization from '../services/Authorization'
import HashManager from '../services/HashManager'
import IdGenerator from '../services/IdGenerator'


export class UserBusiness {
    private userDatabase: UserDatabase

    constructor() {
        this.userDatabase = new UserDatabase()
    }

    createUser = async (input: SignupDTO): Promise<string> => {
        const { email, password } = input

        if(!email || !password) {
            throw new CustomError(400, 'Fill in the email and password fields')
        }

        if(!email.includes('@')) {
            throw new InvalidEmail
        }

        if(password.length < 6) {
            throw new InvalidPassword
        }

        const id: string = IdGenerator.generateId()
        const hashPassword = await HashManager.generateHash(password)

        const user: user = {
            id,
            email,
            password: hashPassword
        }

        await this.userDatabase.insertUser(user)
        const token = Authorization.generateToken({id})

        return token
    }

    login = async (input: LoginInputDTO): Promise<string> => {
        const { email, password } = input

        if(!email || !password) {
            throw new CustomError(400, 'Fill in the email and password fields')
        }

        if(!email.includes('@')) {
            throw new InvalidEmail
        }

        const user = await this.userDatabase.findUserByEmail(email)

        if(!user) {
            throw new UserNotExist
        }

        const hashCompare = await HashManager.compareHash(password, user.password)

        if(!hashCompare) {
            throw new InvalidPassword
        }

        const token = Authorization.generateToken({id: user.id})

        return token
    }
}