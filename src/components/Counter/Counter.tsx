import React, { useState } from 'react'
import Button from '../Button/Button'
import Screen from '../Screen/Screen'
import s from './Counter.module.css'

const Counter: React.FC<CounterPropsType> = ({maxValue, startValue}) => {

    const [counter, setCounter] = useState(startValue)

    const incCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    return (
        <div className={s.counter} >
            <Screen counterValue={counter} maxValue={maxValue} />

            <div className={s.buttons_wrapper}>
                <Button onClick={incCounter} disabled={counter === maxValue} title="inc" />
                <Button onClick={resetCounter} disabled={counter === startValue} title="reset" />
            </div>
        </div>
    )
}

export default Counter


type CounterPropsType = {
    maxValue: number
    startValue: number
}