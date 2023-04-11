import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import css from './NotFoundPage.module.css'


function NotFoundPage({ setPath }) {

  useEffect(() => {
    setPath('*')
  }, [])


  return (
    <div className={css.wrapper}>
      <Link to='/'>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-18.png.webp" alt="" />
      </Link>
    </div>
  )
}

export default NotFoundPage