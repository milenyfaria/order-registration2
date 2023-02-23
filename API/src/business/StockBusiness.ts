import { StockDatabase } from '../data/StockDatabase'

export class StockBusiness {
    private stockDatabase: StockDatabase
    constructor() {
        this.stockDatabase = new StockDatabase()
    }

    readStockBusiness = async () => {
        const stock = await this.stockDatabase.readStockRepository()
        return stock
    }
    
}