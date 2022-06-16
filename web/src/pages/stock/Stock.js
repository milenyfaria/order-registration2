import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CardItem } from '../../components/cardItem/CardItem'
import { ContainerStock } from './style'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { Header } from '../../components/header/Header'

export const Stock = () => {
    const [ stock, setStock ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const { states, setters } = useContext(GlobalStateContext)
    const { list } = states
    const { setList } = setters

    useEffect(() => {
        getStock()
    }, [])

    const getStock = () => {
        setIsLoading(true)

        axios
        .get('http://localhost:3003/estoque')
        .then((res) => {
            setStock(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            alert('Não conseguimos renderizar o estoque')
        })
    }

    const addItemToList = (newItem) => {
        const newList = [...list]
        const index = newList.findIndex((i) => i.id === newItem.id)
    
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
          <div key={type}>
            <div>{type}</div>
    
            {stock.filter((item) => {
              return item.type === type
            })
            .map((item) => {
              return(
                <CardItem
                  key={item.id}
                  item={item}
                  addItemToList={addItemToList} 
                />
              )
            })}
          </div>
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