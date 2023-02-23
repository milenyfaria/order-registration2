import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { SignupDTO, LoginInputDTO } from '../models/User'

export class UserController {
    private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness()
    }

    signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: SignupDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.createUser(input)

            res.status(201).send({message: 'User created', token})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({message: 'User logged in', token})

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}