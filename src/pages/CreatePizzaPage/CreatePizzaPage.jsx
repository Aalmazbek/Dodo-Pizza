import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import { base_url } from '../../constants/api_constant'
import LoadingBar from 'react-top-loading-bar'

import css from './CreatePizzaPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { postPizza } from '../../api/api'
import { addPizza } from '../../redux/slices/pizzasSlice'
import { useDispatch } from 'react-redux'


function checkSpaces(str) {
  return str.trim()
}


function CreatePizzaPage({ setPath, setIsProdCreated }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setPath('/admin/create-pizza')

    setProgress(30)
    setTimeout(() => {
      setProgress(100)
    }, 300)
  },[])


  const [progress, setProgress] = useState(0)

  const [isSending, setSending] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')


  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!checkSpaces(name)) {
      setName('')
    }
    setSending(true)

    if (!checkSpaces(name) || !checkSpaces(description) || !checkSpaces(image) || !checkSpaces(price)) {
      return
    }
    setProgress(30)

    let select = document.querySelector('#createPizza-type-select')
    
    let data = {
      type: select.value,
      name: name,
      description: description,
      image: image,
      price: price
    }
    console.log(data);



    if (data.type == 'Пицца') {
      dispatch(addPizza(data))
        setSending(false)
        setProgress(100)
        setTimeout(() => {
          setIsProdCreated(true)
          navigate('/admin')  
        }, 300)
    } else{
      setTimeout(() => {
        setProgress(100)
        setSending(false)
        alert('Пока только пиццы')
      }, 300)
    }
    // fetch(base_url + "pizzas", fetchData)
        
  }
  


  return (
    <div className={`container ${css.wrapper}`}>
      <LoadingBar 
        color={`rgb(255, 105, 0)`} 
        progress={progress} 
        onLoaderFinished={() => setProgress(0)}
      />
      <h1>Создать</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        
        <label className={css.name}>
          <p>Название</p>
          <input type="text" placeholder='Название' value={name} onChange={(e) => handleChange(e, setName)} required />
        </label>

        <label className={css.description}>
          <p>Описание</p>
          <textarea type="text" placeholder='Описание' value={description} onChange={(e) => handleChange(e, setDescription)} required />
        </label>

        <label className={css.image}>
          <p>Изображение</p>
          <input type="text" placeholder='Изображение' value={image} onChange={(e) => handleChange(e, setImage)} required />
        </label>

        <label className={css.price}>
          <p>Цена в сомах</p>
          <input type="number" className={css.price} placeholder='Цена' value={price} onChange={(e) => handleChange(e, setPrice)} required />
        </label>

        <label className={css.type}>
          <p>Тип</p>
          <select id='createPizza-type-select'>
            <option value="Пицца" defaultValue>Пицца</option>
            <option value="Напиток">Напиток</option>
            <option value="Десерт">Десерт</option>
            <option value="Закуска">Закуска</option>
          </select>
        </label>

        <label className={css.button}>
          <Button variant={isSending ? 'disabled' : '' } title={isSending ? 'Создание..' : 'Создать'} disabled={isSending ? true : false}/>
        </label>
      </form>
    </div>
  )
}

export default CreatePizzaPage