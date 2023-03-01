import { product } from '../models/Stock'
import { BaseDatabase } from './BaseDatabase'

export class StockDatabase extends BaseDatabase {
    private static table_name = 'stock'

    readStock = async () => {
        try {
            return await StockDatabase
            .connection(StockDatabase.table_name)
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