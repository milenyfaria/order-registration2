import { Router } from 'express'
import { readStockController, updateStockController } from '../controller/StockController'

export const router = Router()

router.get('/estoque', readStockController)
router.post('/lista-compras', updateStockController)
