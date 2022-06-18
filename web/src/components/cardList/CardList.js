import React from 'react'
import {
  ContainerCard,
  Image,
  Name,
  ContainerPrice,
  Sign,
  Price,
  Button
} from './style'

export const CardList = (props) => {
  const { photo, name, price, qty } = props.item

    return (
      <ContainerCard>
        <Image src={photo} />
        <div>
          <Name>{name}</Name>
          <ContainerPrice>
            <Sign>R$ </Sign>
            <Price>
              {price} x {qty}
            </Price>
          </ContainerPrice>
        </div>
        <Button onClick={() => props.changeItemFromList(props.item)}>
          Remover
        </Button>
      </ContainerCard>
    )
}