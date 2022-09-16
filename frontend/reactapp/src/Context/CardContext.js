import React, { createContext,  useEffect,  useState } from 'react'

export const Cart = createContext();

const Context = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(cart));
    }, [cart]);

  return (
    <Cart.Provider value={{cart,setCart}}>{children}</Cart.Provider>
  )
}

export default Context