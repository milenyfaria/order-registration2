import { connection } from '../data/connection'

export const readStockRepository = async () => {
   try {
      return await connection('stock').select()
      
   } catch (error: any) {
      return error.message
   }
}

export const updateStockRepository = async (list: any) => {
   try {
      return connection.transaction(trx => {
         const queries: Array<object> = []
         list.forEach((item: any) => {
             const query = connection('stock')
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
