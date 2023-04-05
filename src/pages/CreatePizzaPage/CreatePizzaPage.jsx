import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import { base_url } from '../../constants/api_constant'
import LoadingBar from 'react-top-loading-bar'

import css from './CreatePizzaPage.module.css'
import { useNavigate } from 'react-router-dom'


function checkSpaces(str) {
  return str.trim()
}


function CreatePizzaPage() {
  const [progress, setProgress] = useState(0)

  const [isSending, setSending] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const navigate = useNavigate()

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  
  const handleSubmit = (e) => {
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

    let fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }

    fetch(base_url + "pizzas", fetchData)
      .finally(() => {
        setSending(false)
        setProgress(100)
      })
      .then(res => {
        if (res.status) {
          navigate('/admin')
        }
      })
        
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