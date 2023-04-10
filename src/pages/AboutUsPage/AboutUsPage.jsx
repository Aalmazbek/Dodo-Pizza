import React from 'react'
import { useEffect } from 'react'

function AboutUsPage({ setPath }) {

  useEffect(() => {
    setPath('/aboutus')
  })


  return (
    <div>AboutUsPage</div>
  )
}

export default AboutUsPage