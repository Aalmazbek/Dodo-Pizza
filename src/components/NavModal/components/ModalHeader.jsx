import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import css from '../NavModal.module.css'



function ModalHeader() {

  let data = useSelector(state => state.cart.data)
  const totalAmount = data.reduce((sum, curr) => sum += curr.amount, 0)
  const totalPrice = data.reduce((sum, curr) => (
    sum += curr.amount*curr.price
  ), 0)


  let productsWord

  if (totalAmount < 21) {
    if (totalAmount > 4) {
    productsWord = 'товаров'
    } else if (totalAmount > 1) {
      productsWord = 'товара'
    } else {
      productsWord = 'товар'
    }
  } else{
    if (String(totalAmount).slice(-1) > 4 || String(totalAmount).slice(-1) == 0) {
      productsWord = 'товаров'
    } else if (String(totalAmount).slice(-1) > 1) {
      productsWord = 'товара'
    } else{
      productsWord = 'товар'
    }
  }
  

  return (
    <div className={css.ModalHeader}>
      <p>{totalAmount} {productsWord} на {totalPrice} сом</p>
    </div>
  )
}

export default ModalHeader