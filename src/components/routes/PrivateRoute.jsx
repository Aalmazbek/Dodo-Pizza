import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ isAuth, Component }) {
    const auth = useSelector(state => state.auth.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth) {
            navigate('/login')
        }
    }, [auth, navigate])

    return (
        <Component />
    )
}

export default PrivateRoute