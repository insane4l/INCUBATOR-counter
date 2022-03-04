import React from 'react';
import s from './Screen.module.css';

const CounterScreen: React.FC<ScreenPropsType> = ({validatorError, counterValue, maxValue, editMode}) => {

    const counterValueCN = (counterValue === maxValue) ? `counter_value counter_value_max` : 'counter_value';
    const counterMessageEl = validatorError ? <span className="error_text">{validatorError}</span> : <span>Enter values and press "set"</span>;

    return (
        <div className="screen" >

            {editMode 
                ? counterMessageEl
                : <span className={counterValueCN}>{counterValue}</span>
            }

        </div>
    )
}

export default CounterScreen;


type ScreenPropsType = {
    counterValue: number
    maxValue: number
    validatorError: string
    editMode: boolean
}