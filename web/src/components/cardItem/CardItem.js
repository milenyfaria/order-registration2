import React from 'react'
import { ContainerCard, Name, Photo, Type, ContainerPrice, Sign, Price, Stock, Button } from './style'

export const CardItem = (props) => {
  const { name, price, qty_stock, photo } = props.item

  return (
    <ContainerCard>
      {props.type && <Type>{props.type}</Type>}
      <Photo src={photo} />
      <Name>{name}</Name>
      <ContainerPrice>
        <Sign>R$</Sign>
        <Price>{price}</Price>
      </ContainerPrice>
      <Stock>Restam no estoque: {qty_stock}</Stock>
      <Button onClick={() => props.addItemToList(props.item)}>+ Adicionar</Button>
    </ContainerCard>
  )
}
