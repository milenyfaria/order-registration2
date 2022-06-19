import React, { useContext } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { goToStock } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { CardList } from '../../components/cardList/CardList'
import { ContainerTotal, Total, Price, ButtonSave } from './style'
import { Header } from '../../components/header/Header'
import { currentDate } from '../../constants/date'

export const ShoppingList = () => {
  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalStateContext)
  const { list } = states
  const { setList } = setters

  const removeItemFromList = (itemToChange) => {
    const newList = [...list]
    const index = newList.findIndex((i) => i.id === itemToChange.id)

    if(newList[index].qty === 1){
      newList.splice(index, 1)
    } else {
      newList[index].qty -=1
    }

    setList(newList)
  }

  const addItemToList = (newItem) => {
    const newList = [...list]
    const index = newList.findIndex((i) => i.id === newItem.id)
    if (!newItem.qty_stock || (index !== -1 && newItem.qty_stock <= newList[index].qty)) {
        Swal.fire('Não há mais itens no estoque')
        return
    }

    if (index === -1) {
      const listItem = { ...newItem, qty: 1 }
      newList.push(listItem)
    } else {
      newList[index].qty += 1
    }

    setList(newList)
  }


  const renderedList = list.map((item) => {
    return(
      <CardList
        key={item.id}
        item={item}
        removeItemFromList={removeItemFromList}
        addItemToList={addItemToList} 
      />
    )
  })

  let priceToPay = 0
  list.forEach((item) => {
    priceToPay += Number(item.price) * item.qty
  })

  const saveShoppingList = () => {
    const body = list.map((item) => {
      return {
        id: item.id,
        quantity: item.qty,
      }
    })

    axios
      .post('http://localhost:3003/lista-compras', body)
      .then((res) => {
        Swal.fire(`Data programada para sua entrega: ${currentDate}`)
        setList([])
        goToStock(navigate)
      })
      .catch((err) => {
        alert("Deu erro!")
      })
  }


  return(
    <div>
      <Header button={"Continuar comprando"} route={() => goToStock(navigate)}/>
      {renderedList}
        <ContainerTotal>
          <Total>Total</Total>
          <Price>{priceToPay.toFixed(2)}</Price>
          <ButtonSave onClick={saveShoppingList}>Salvar minha lista de compras</ButtonSave>
        </ContainerTotal>
    </div>
  )
}
