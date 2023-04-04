import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import { base_url } from '../../constants/api_constant'

import css from './CreatePizzaPage.module.css'



function CreatePizzaPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  
  const handleSubmit = () => {
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
      body: data,
      headers: new Headers()
    }

    fetch(base_url + "pizzas", fetchData)
      .then(response => response.json())
      .then(data => console.log(data))
  }
  


  return (
    <div className={`container ${css.wrapper}`}>
      <h1>Создать</h1>
      <div className={css.form}>
        <p>Тип</p>
        <select id='createPizza-type-select' className={css.select}>
          <option value="Пицца" defaultValue>Пицца</option>
          <option value="Напиток">Напиток</option>
          <option value="Десерт">Десерт</option>
          <option value="Закуска">Закуска</option>
        </select>
        <p>Название</p>
        <input type="text" placeholder='Название' value={name} onChange={(e) => handleChange(e, setName)} />
        <p>Описание</p>
        <input type="text" placeholder='Описание' value={description} onChange={(e) => handleChange(e, setDescription)} />
        <p>Изображение</p>
        <input type="text" placeholder='Изображение' value={image} onChange={(e) => handleChange(e, setImage)} />
        <p>Цена в сомах</p>
        <input type="number" className={css.price} placeholder='Цена' value={price} onChange={(e) => handleChange(e, setPrice)} />

        <Button title='Подтвердить' handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default CreatePizzaPage