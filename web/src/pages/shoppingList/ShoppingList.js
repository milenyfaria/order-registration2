import React, { useContext } from 'react'
import axios from 'axios'
import { goToStock } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { CardList } from '../../components/cardList/CardList'
import { Container, ContainerTotal, Total, Price, ButtonSave } from './style'
import { Header } from '../../components/header/Header';

export const ShoppingList = () => {
  const navigate = useNavigate()
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
        alert('Deu certo')
        setList([])
      })
      .catch((err) => {
        alert("Deu erro!")
      })
  }


  return(
    <div>
      <Header button={"Continuar comprando"} route={() => goToStock(navigate)}/>
      {renderedList}
      <Container>
        <ContainerTotal>
          <Total>Total: R$</Total>
          <Price>{priceToPay.toFixed(2)}</Price>
        </ContainerTotal>
        <ButtonSave onClick={saveShoppingList}>Salvar minha lista de compras</ButtonSave>
      </Container>
    </div>
  )
}
