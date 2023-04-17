import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseAmount, increaseAmount } from '../../redux/slices/cartSlice'
import css from './CountButton.module.css'

function CountButton({ amount, id, deleteProd, variant }) {

  let data = useSelector(state => state.cart.data)
  const totalAmount = data.reduce((sum, curr) => sum += curr.amount, 0)
  const dispatch = useDispatch()
  

  const increaseProdAmount = () => {
    if (totalAmount < 100) {
      dispatch(increaseAmount(id))
    }
  }

  const decreaseProdAmount = () => {
    if (amount < 2) {
      setTimeout(() => {
        deleteProd()
      }, 300)
      return
    }
    dispatch(decreaseAmount(id))
  }


  return (
    <div className={`${css.wrapper} ${variant === 'small' ? css.small : ''}`}>
      <button onClick={decreaseProdAmount}>
        <svg width="10" height="10" viewBox="0 0 10 10" className="icon"><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg>
      </button>
      <p>{amount}</p>
      <button onClick={increaseProdAmount}>
       <svg width="10" height="10" viewBox="0 0 10 10" className="icon"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g></svg>
      </button>
    </div>
  )
}

export default CountButton