import { Request, Response } from 'express'
import { StockBusiness } from '../business/StockBusiness'

export class StockController {

    private stockBusiness: StockBusiness
    constructor() {
        this.stockBusiness = new StockBusiness()
    }

    readStockController = async (req: Request, res: Response) => {

        try {
            const stock =  await this.stockBusiness.readStockBusiness()
            res.send(stock)
            
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
