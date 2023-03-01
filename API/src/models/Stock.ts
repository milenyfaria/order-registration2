export type product = {
    type: string
    id: number
    name: string
    price: number
    qty_stock: number
    photo: string
}

export interface StockDTO {
    token: string
}