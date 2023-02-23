import { BaseDatabase } from './BaseDatabase'
import { user } from '../models/User'
import { CustomError } from '../errors/CustomError'

export class UserDatabase extends BaseDatabase {
    private static table_name = 'stock_users'

    insertUser = async (user: user): Promise<void> => {
        try {
            await UserDatabase
            .connection(UserDatabase.table_name)
            .insert({
                id: user.id,
                email: user.email,
                password: user.password
            })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    findUserByEmail = async (email: string): Promise<user> => {
        try {
            const result = await UserDatabase
            .connection(UserDatabase.table_name)
            .select()
            .where({email})

            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}