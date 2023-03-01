import { StockDatabase } from '../data/StockDatabase'
import { StockDTO, product } from '../models/Stock'
import { CustomError, Unauthorized } from '../errors/CustomError'
import Authorization from '../services/Authorization'

export class StockBusiness {
    private stockDatabase: StockDatabase
    constructor() {
        this.stockDatabase = new StockDatabase()
    }

    readStockBusiness = async (input: StockDTO): Promise<product> => {
        const { token } = input

        if(!token) {
            throw new CustomError(400, 'Fill in the token fields')
        }

        const data = Authorization.getTokenData(token)

        if(!data.id) {
            throw new Unauthorized()
        }
        
        const stock = await this.stockDatabase.readStock()

        return stock
    }
    
}