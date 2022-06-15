import { Request, Response } from 'express'
import { connection } from '../data/connection'

export const readStockController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {

        const resposta =  await connection('stock').select()
        res.send(resposta)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const createShoppingList = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const updateShoppingList = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const deleteShoppingList = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}