import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useRequestData } from '../../hooks/useRequestData'
import { goToShoppingList } from '../../routes/coordinator'
import { Header } from '../../components/header/Header'
import { CardItem } from '../../components/cardItem/CardItem'
import { ContainerStock, Loading } from './style'

export const Stock = () => {
    const navigate = useNavigate()
    const [ stock, setStock, isLoading ] = useRequestData('/estoque', [])
    const { states, setters } = useContext(GlobalStateContext)
    const { list } = states
    const { setList } = setters

    
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

      const typeItens = []

      stock.forEach((item) => {
        const repeatType = typeItens.findIndex((i) => {
          return item.type === i.type
        }) > -1
        if(!repeatType) {
          typeItens.push(item)
        }
      })
    
      const newTypeArray = typeItens.map((item) => {
        return item.type
      })
    
      const productsByType = newTypeArray.map((type) => {
        return(
          <Fragment key={type}>
            {stock.filter((item) => {
              return item.type === type
            })
            .map((item, index) => {
              return(
                <CardItem
                  key={item.id}
                  type={!index && type}
                  item={item}
                  addItemToList={addItemToList} 
                />
              )
            })}
          </Fragment>
        )
      })
    
       
        return(
            <div>
                <Header button={'Minha lista de compras'} route={() => goToShoppingList(navigate)}/>
                <ContainerStock>
                  {isLoading ? <Loading></Loading> : productsByType}
                </ContainerStock>
            </div>
        )
    }