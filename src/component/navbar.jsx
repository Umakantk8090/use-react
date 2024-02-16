import React, { useEffect } from 'react'

const Navbar = ({color}) => {
  useEffect(()=>{
    alert("color was change")
  },[color])
  return (
    <div>
      i am navbar{color} hehe..
    </div>
  )
}

export default Navbar
