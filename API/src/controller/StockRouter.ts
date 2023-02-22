import express from 'express'
import { StockController } from './StockController'

export const stockRouter = express.Router()

const stockController = new StockController()

stockRouter.get('/estoque', stockController.readStockController)
stockRouter.post('/lista-compras', stockController.updateStockController)