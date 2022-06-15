import { connection } from '../data/connection';

// export const createShoppingListRepository = async (stock: any) => {
//    try {
//       return await connection('stock').insert({
//          stock,
//       })
//    } catch (error: any) {
//       return error.message
//    }
// }

export const readStockRepository = async () => {
   try {
      return await connection('stock').select()
      
   } catch (error: any) {
      return error.message
   }
}

// export const updateShoppingListRepository = async (type, id, name, price, qty_stock, photo) => {
//    try {
//       return await connection('stock').where('id', '=', id).update({ name });
//    } catch (error: any) {
//       return error.message;
//    }
// };

// export const deleteStudentRepository = async (id) => {
//    try {
//       return await connection('students').where('id', '=', id).delete();
//    } catch (error: any) {
//       return error.message;
//    }
// };