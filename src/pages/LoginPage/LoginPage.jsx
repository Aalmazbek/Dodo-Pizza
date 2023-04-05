import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'


let account = {
    login: 'admin',
    password: 'admin'
}

function LoginPage({ setIsLoggedIn }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        if (account.login === login && account.password === password) {
            setIsLoggedIn(true)
            navigate('/admin')
        }
    }

     return (
        <div className='container'>
            <h1>Вход</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Логин</p>
                    <input type="text" onChange={(e) => setLogin(e.target.value)} />
                </label>

                <label>
                    <p>Пароль</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </label>

                <Button title="Войти" type="submit" />
            </form>
        </div>
    )
}

export default LoginPage