import React from 'react';
import Button from '../Button/Button';
import CounterScreen from './CounterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { CounterOptionsType, setCounterValue } from '../../redux/counterReducer';

const Counter: React.FC<CounterPropsType> = ({editMode, validatorError}) => {

    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue);
    const {startValue, maxValue} = useSelector<AppStateType, CounterOptionsType>(state => state.counter.options);

    const dispatch = useDispatch();
    
    const incCounter = () => {
        if (counterValue < maxValue) {
            dispatch( setCounterValue(counterValue + 1) );
        }
    }

    const resetCounter = () => {
        dispatch( setCounterValue(startValue) )
    }

    return (
        <div className="counter" >
            <CounterScreen 
                counterValue={counterValue}
                maxValue={maxValue}
                validatorError={validatorError}
                editMode={editMode} />

            <div className="buttons_wrapper">
                <Button 
                    onClick={incCounter}
                    disabled={editMode || counterValue === maxValue}
                    title="inc" />

                <Button
                    onClick={resetCounter}
                    disabled={editMode || counterValue === startValue}
                    title="reset" />
            </div>
        </div>
    )
}

export default Counter;


type CounterPropsType = {
    validatorError: string
    editMode: boolean
}