import React, { createContext, useState } from 'react'
import Comp_A from './Comp_A'


//Comp_A => Comp_B =>Comp_C
// Từ A truyền xuống b qua props
//Từ B xuống C
//khai bao context o component va exprort ra ben ngoai de xu dung
export const ThemeContext=createContext(); //Buoc 1
export default function UseContext() {
    const[them,setTheme]=useState("light")

    

    const handleChangeTham=()=>{
        setTheme(them==="light"?"dark":"light")
    }
  return (
    //buoc 2
    <ThemeContext.Provider value={them}>
    <>
    <button onClick={handleChangeTham}>Change theme</button>
    {/* <Comp_A them={them}/> */}
    <Comp_A />
    </>
    </ThemeContext.Provider>
  )
}
