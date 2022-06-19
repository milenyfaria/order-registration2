import React from 'react'
import {
  ContainerCard,
  Image,
  Name,
  ContainerPrice,
  Sign,
  Price,
  Button, 
  ButtonIconAdd,
  ButtonIconRemove
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
        <Button onClick={() => props.removeItemFromList(props.item)}>Ver Estoque</Button>
        <ButtonIconAdd  size="22" onClick={() => props.addItemToList(props.item)} />
        <ButtonIconRemove size="22" onClick={() => props.removeItemFromList(props.item)} />
      </ContainerCard>
    )
}