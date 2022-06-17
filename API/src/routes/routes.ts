import { Router } from 'express'
import { readStockController, updateStockController } from '../controllers/stock-controllers'

export const router = Router()

router.get('/estoque', readStockController)
router.post('/lista-compras', updateStockController)
