import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PublicRoute({ isAuth, Component }) {

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/admin')
        }
    }, [isAuth])

  return (
    <Component />
  )
}

export default PublicRoute