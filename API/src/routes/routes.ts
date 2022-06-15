import { Router } from 'express'
import { readStockController, 
        createShoppingList, 
        updateShoppingList, 
        deleteShoppingList
    } from '../controllers/stock-controllers'

export const router = Router()

router.get('/estoque', readStockController)
router.post('/lista-compras', createShoppingList)
router.put('/lista-compras/:id', updateShoppingList)
router.delete('/lista-compras/:id', deleteShoppingList)