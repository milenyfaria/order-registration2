import { app } from './controller/app'
import { stockRouter } from './controller/StockRouter'

app.use('/', stockRouter)
