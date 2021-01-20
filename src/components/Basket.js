import React from 'react'
import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { bounceInLeft } from 'react-animations'


const bounceAnimation = keyframes `${bounceInLeft},
text-align: center`
const BasketStyle = styled.article`
animation: 1s ${bounceAnimation}
`


const Basket = ({data}) => {
  const { basketId } = useParams()

  const basket = data.find(basket => basket.id === Number(basketId))

  const basketInfo = basket ? 
  (
    <BasketStyle key={basket.id}>
      <h3>{ basket.name }</h3>
      <p>{ basket.price } </p>
    </BasketStyle>
  ) :
  <h2>Hmmm, we don't have a basket of that name. Contact us if you think we should!</h2>

  return (
    <article>
      { basketInfo }
    </article>
  )
}

export default Basket