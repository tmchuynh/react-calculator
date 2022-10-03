import React from "react";
import { useState } from "react";
import { createContext } from "react"

export const CalcContext = createContext()
const CalcProvider = ({children}) => {

    const [calc, setCalc] = useState ({
        sign: "",
        num: 0,
        res: 0
    });

    const provderValue = {
        calc, setCalc
    }
  return (
    <CalcContext.Provider value = {provderValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcContext