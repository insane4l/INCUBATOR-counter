import React from 'react'
import s from './Screen.module.css'

const Screen: React.FC<ScreenPropsType> = ({counterValue, maxValue}) => {

    const finalClassName = (counterValue === maxValue) ? `${s.max_value} ${s.screen}` : s.screen

    return (
        <div className={finalClassName} >
            {counterValue}
        </div>
    )
}

export default Screen


type ScreenPropsType = {
    counterValue: number
    maxValue: number
}