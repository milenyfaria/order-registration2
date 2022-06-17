import React from 'react'
import { ContainerCard } from './style'

export const CardList = (props) => {
    const { name, price, qty } = props.item

    return (
        <ContainerCard>
          <p>{name}</p>
          <p>{price}</p>
          <p>{qty}</p>
          <button onClick={() => props.changeItemFromList(props.item)}>Remover</button>
        </ContainerCard>
      )

}