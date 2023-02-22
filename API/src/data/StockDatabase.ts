import { BaseDatabase } from './BaseDatabase'

export class StockDatabase extends BaseDatabase {

    readStockRepository = async () => {
        try {
            return await StockDatabase
            .connection('stock')
            .select()
        } catch (error: any) {
            return error.message
        }
    }

    updateStockRepository = async (list: any) => {
        try {
            return StockDatabase
            .connection
            .transaction(trx => {
                const queries: Array<object> = []
                list.forEach((item: any) => {
                    const query = StockDatabase
                    .connection('stock')
                    .where('id', '=', item.id)
                    .decrement('qty_stock', item.quantity)
                    .transacting(trx)
                    queries.push(query)
                })

                Promise.all(queries)
                .then(trx.commit)
                .catch(trx.rollback)
            })
        } catch (error: any) {
            return error.message
        }
    }
}