import React, {forwardRef} from 'react'
import MenuFeed from './MenuFeed';

const Main = forwardRef(({cart,setCart},ref) => {
  return (
    <div ref={ref} className=' bg-primary'>
        <MenuFeed cart={cart} setCart={setCart} />
    </div>
  )
});

export default Main