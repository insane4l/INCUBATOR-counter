import React, { useState } from 'react'
import Button from '../Button/Button'
import CounterScreen from './CounterScreen'
import s from './Counter.module.css'
import { CounterOptionsType } from '../../App'

const Counter: React.FC<CounterPropsType> = ({counterOptions, counterValue, setCounterValue, editMode, validatorError}) => {

    const {maxValue, startValue} = counterOptions;

    const incCounter = () => {
        if (counterValue < maxValue) {
            setCounterValue(counterValue + 1)
        }
    }

    const resetCounter = () => {
        setCounterValue(startValue)
    }

    return (
        <div className="counter" >
            <CounterScreen counterValue={counterValue} maxValue={maxValue} validatorError={validatorError} editMode={editMode}/>

            <div className="buttons_wrapper">
                <Button onClick={incCounter} disabled={editMode || counterValue === maxValue} title="inc" />
                <Button onClick={resetCounter} disabled={editMode || counterValue === startValue} title="reset" />
            </div>
        </div>
    )
}

export default Counter


type CounterPropsType = {
    counterOptions: CounterOptionsType
    counterValue: number
    validatorError: string
    editMode: boolean
    setCounterValue: (value: number) => void
}