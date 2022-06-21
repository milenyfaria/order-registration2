import { Request, Response } from 'express'
import { readStockRepository, updateStockRepository } from '../repository/stock-repository'

export const readStockController = async (req: Request, res: Response) => {

    try {
        const stock =  await readStockRepository()
        res.send(stock)
        
    } catch (error: any) {
        res.status(404).send(error.message)
    }
}

export const updateStockController = async (req: Request, res: Response) => {

    try {
        const stock = await updateStockRepository(req.body)
        res.send(stock)

    } catch (error: any) {
        res.status(404).send(error.message)
    }
}

