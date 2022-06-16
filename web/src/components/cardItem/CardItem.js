import React from 'react'
import { ContainerCard, Name, Photo } from './style'

export const CardItem = (props) => {
  const { name, price, qty_stock, photo } = props.item

  return (
    <ContainerCard>
      <Photo src={photo} />
      <Name>{name}</Name>
      <p>{price}</p>
      <p>{qty_stock}</p>
      <button onClick={() => props.addItemToList(props.item)}>Adicionar</button>
    </ContainerCard>
  )
}
