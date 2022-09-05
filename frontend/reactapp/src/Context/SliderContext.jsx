import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Sliders = createContext();

const SliderContext = ({children}) => {
    const [slider, setSlider] = useState([]);
  return (
    <Sliders.Provider value={{slider, setSlider}}>{children}</Sliders.Provider>
  )
}

export default SliderContext