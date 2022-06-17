import { connection } from '../data/connection';

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
                 .transacting(trx) // This makes every update be in the same transaction
             queries.push(query)
         })
     
         Promise.all(queries) // Once every query is written
             .then(trx.commit) // We try to execute all of them
             .catch(trx.rollback) // And rollback in case any of them goes wrong
     })
   } catch (error: any) {
      console.log(error)
      return error.message;
   }
};
