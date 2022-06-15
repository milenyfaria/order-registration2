import { Request, Response } from 'express'
import { readStockRepository } from '../repository/stock-repository'

export const readStockController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {

        const stock =  await readStockRepository()
        
        res.send(stock)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

// export const createShoppingList = async (req: Request, res: Response) => {
//     let errorCode = 500

//     try {
        
//     } catch (error: any) {
//         res.status(errorCode).send(error.message)
//     }
// }

// export const updateShoppingList = async (req: Request, res: Response) => {
//     let errorCode = 500

//     try {
        
//     } catch (error: any) {
//         res.status(errorCode).send(error.message)
//     }
// }

// export const deleteShoppingList = async (req: Request, res: Response) => {
//     let errorCode = 500

//     try {
        
//     } catch (error: any) {
//         res.status(errorCode).send(error.message)
//     }
// }