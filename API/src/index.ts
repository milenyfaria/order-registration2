import { app } from './controller/app'
import { userRouter } from './controller/UserRouter'
import { stockRouter } from './controller/StockRouter'

app.use('/user/', userRouter)
app.use('/estoque/', stockRouter)
