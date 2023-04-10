import React from 'react'
import { useEffect } from 'react'

function ContactsPage({ setPath }) {

  useEffect(() => {
    setPath('/contacts')
  })


  return (
    <div>ContactsPage</div>
  )
}

export default ContactsPage