import { Request, Response } from 'express'
import { StockBusiness } from '../business/StockBusiness'
import { StockDTO } from '../models/Stock'

export class StockController {

    private stockBusiness: StockBusiness
    constructor() {
        this.stockBusiness = new StockBusiness()
    }

    readStockController = async (req: Request, res: Response): Promise<void> => {

        try {
            const input: StockDTO = {
                token: req.headers.authorization!
            }
            
            const stock =  await this.stockBusiness.readStockBusiness(input)
            
            res.status(201).send(stock)
            
        } catch (error: any) {
            res.status(404).send(error.message)
        }
    }

    updateStockController = async (req: Request, res: Response) => {

        try {
            const stock = await this.stockBusiness
            res.send(stock)

        } catch (error: any) {
            res.status(404).send(error.message)
        }
    }
}
