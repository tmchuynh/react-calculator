import React from 'react'
import CalcContext from '../context/CalcContext'

const getStyleName = btn => {


    const className = {
        '=': 'equals',
        "X": 'opt',
        "-": 'opt',
        "+": 'opt',
        "/": 'opt',
    }
    return className[btn]
}

const Button = ({value}) => {

    const {calc, setCalc } = useContext(CalcContext);


    const commaClick =() => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value :calc.num
        });
        const resetClick = () =>{
            setCalc ({sign: '', num: 0, res: 0})
        }
    }

    const handleBtnClick = () => {
        const results = {
        '.': commaClick
        "C":resetClick
        }
        return results[value]()

    }
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button