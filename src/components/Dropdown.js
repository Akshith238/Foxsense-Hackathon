import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Dropdown = () => {
  const [dropdownItems,setDropDownItems]=useState([]);
  return (
    <div className='flex flex-col h-1/2 shadow-2xl rounded-lg bg-white'>
        {dropdownItems.map((drop,index)=>(
            <Button
              className='bg-white transition text-black text-left hover:translate-x-1'
              component={Link} 
              to={`${drop.link}`}
              variant='contained'
              key={index}
            > 
              {drop.name}
            </Button>
        ))}
    </div>
  )
}

export default Dropdown