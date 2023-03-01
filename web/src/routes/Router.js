import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { ShoppingList } from '../pages/shoppingList/ShoppingList'
import { Stock } from '../pages/stock/Stock'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/lista-compras' element={<ShoppingList />} />
                <Route path='/estoque/estoque' element={<Stock />} />
            </Routes>
        </BrowserRouter>
    )
}