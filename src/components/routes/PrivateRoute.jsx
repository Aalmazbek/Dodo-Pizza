import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ isAuth, Component }) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth])

    return (
        <Component />
    )
}

export default PrivateRoute