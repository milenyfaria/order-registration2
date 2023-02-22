import { Request, Response } from 'express'
import { StockDatabase } from '../data/StockDatabase'

export class StockController {

    private stockRepository: StockDatabase
    constructor() {
        this.stockRepository = new StockDatabase()
    }

    readStockController = async (req: Request, res: Response) => {

        try {
            const stock =  await this.stockRepository()
            res.send(stock)
            
        } catch (error: any) {
            res.status(404).send(error.message)
        }
    }

    updateStockController = async (req: Request, res: Response) => {

        try {
            const stock = await this.stockRepository.updateStockRepository(req.body)
            res.send(stock)

        } catch (error: any) {
            res.status(404).send(error.message)
        }
    }
}
