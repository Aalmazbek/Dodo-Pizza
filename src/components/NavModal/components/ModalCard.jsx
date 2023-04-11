import React from 'react'

import css from '../NavModal.module.css'



function ModalCard({ elem }) {
  return (
    <div className={css.card}>
        {elem}
    </div>
  )
}

export default ModalCard