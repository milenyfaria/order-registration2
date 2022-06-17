import React, { useContext } from 'react'
import axios from 'axios'
import { goToStock, logout } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { CardList } from '../../components/cardList/CardList'
import { ContainerList } from './style'
import { useRequestData } from '../../hooks/useRequestData'

export const ShoppingList = () => {
  const navigate = useNavigate()
  const [ stock, setStock, isLoading ] = useRequestData('/estoque', [])
  const { states, setters } = useContext(GlobalStateContext)
  const { list } = states
  const { setList } = setters

  const changeItemFromList = (itemToChange) => {
    const newList = [...list]
    const index = newList.findIndex((i) => i.id === itemToChange.id)

    if(newList[index].qty === 1){
      newList.splice(index, 1)
    } else {
      newList[index].qty -=1
    }

    setList(newList)
  }

  const renderedList = list.map((item) => {
    return(
      <CardList
        key={item.id}
        item={item}
        changeItemFromList={changeItemFromList} 
      />
    )
  })

  let priceToPay = 0
  list.forEach((item) => {
    priceToPay += Number(item.price) * item.qty
  })

  const onClick = () => {
    const body = list.map((item) => {
      return {
        id: item.id,
        quantity: item.qty,
      }
    })

    axios
      .post('http://localhost:3003/lista-compras', body)
      .then((res) => {
        alert('Deu certo')
        setList([])
      })
      .catch((err) => {
        alert("Deu erro!")
      })
  }


  return(
    <ContainerList>
      <h1>Lista Compras</h1>
      {renderedList}
      <h3>Total: R${priceToPay.toFixed(2)}</h3>
      <button onClick={onClick}>Salvar minha lista de compras</button>
      <button onClick={() => goToStock(navigate)}>Ver Estoque</button>
      <button onClick={() => logout(navigate)}>Sair</button>
    </ContainerList>
  )
}
