import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button/Button'
import css from './LoginPage.module.css'
import { loginAction } from '../../redux/slices/authSlice';


let account = {
    login: 'admin',
    password: 'admin'
}

function LoginPage({ setPath }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [isLoginValid, setIsLoginValid] = useState(0)
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()

        if (account.login === login && account.password === password) {
            dispatch(loginAction(true))
        }   else{
            notify()
            setLogin('')
            setPassword('')
            // alert('Неверные данные')
            // window.location.reload(false)
        }
    }

    useEffect(() => {
        setPath('/login')
    }, [])

    const notify = () => {
        return (
            toast.error('Неверные данные', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
            })
        )
    }


    return (
        <div className={`container ${css.wrapper}`}>
            <h1>Вход</h1>
            <form onSubmit={submit}>
                <label>
                    <p>Логин</p>
                    <input type="text" value={login} onChange={(e) => {
                        let str = e.target.value
                        if (isLoginValid < 1 && str.trim()) {
                            setLogin(str)
                            setIsLoginValid(str.length)
                            // console.log(str.length);
                        }   else if (isLoginValid === 1 && str === "") {
                            setLogin(str)
                            setIsLoginValid(str.length)
                            // console.log("пусто");
                        }   else if (isLoginValid >= 1) {
                            setLogin(str)
                            setIsLoginValid(str.length)
                        }
                    }} required />
                </label>

                <label>
                    <p>Пароль</p>
                    <input type="password" value={password} onChange={(e) => {
                        let str = e.target.value
                        if (isPasswordValid < 1 && str.trim()) {
                            setPassword(str)
                            setIsPasswordValid(str.length)
                            // console.log(str.length);
                        }   else if (isPasswordValid === 1 && str === "") {
                            setPassword(str)
                            setIsPasswordValid(str.length)
                            // console.log("пусто");
                        }   else if (isPasswordValid >= 1) {
                            setPassword(str)
                            setIsPasswordValid(str.length)
                        }
                    }} required />
                </label>

                <Button title="Войти" type="submit" />
            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Flip}
            />
        </div>
    )
}

export default LoginPage