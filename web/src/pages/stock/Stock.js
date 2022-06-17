import React, { Fragment, useContext } from 'react'
import { CardItem } from '../../components/cardItem/CardItem'
import { ContainerStock } from './style'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { Header } from '../../components/header/Header'
import { useRequestData } from '../../hooks/useRequestData'

export const Stock = () => {
    const [ stock, setStock, isLoading ] = useRequestData('/estoque', [])
    const { states, setters } = useContext(GlobalStateContext)
    const { list } = states
    const { setList } = setters

    
    const addItemToList = (newItem) => {
        const newList = [...list]
        const index = newList.findIndex((i) => i.id === newItem.id)
        if (!newItem.qty_stock || (index !== -1 && newItem.qty_stock <= newList[index].qty)) {
            alert('Vá a mierda')
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
                <Header />
                <ContainerStock>
                {isLoading ? <p>Carregando...</p> : productsByType}
                </ContainerStock>
            </div>
        )
    }