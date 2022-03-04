import React, {useState } from 'react';
import { CounterOptionsType } from '../../App';
import Button from '../Button/Button';
import OptionsField from './OptionsField';
import OptionsScreen from './OptionsScreen';

const Options: React.FC<OptionsPropsType> = ({setEditMode, onNewOptionsConfirmed, editMode, validatorError, setValidatorError}) => {

    const [startValue, setStartValue] = useState(0);
	const [maxValue, setMaxValue] = useState(5);


    const confirmNewOptions = () => {
        if (editMode && !validatorError) {
            const newOptions = {startValue, maxValue};
		    onNewOptionsConfirmed(newOptions);
        }
	}

    const onStartValueChangeHandler = (value: number) => {
        setStartValue(value);
        setEditMode(true);

        if (value < 0) return setValidatorError("Incorrect value!");
        if (value >= maxValue) return setValidatorError("The max value must be greater than the start value!");

        if (maxValue >= 0) setValidatorError('');
    }

    const onMaxValueChangeHandler = (value: number) => {
        setMaxValue(value);
        setEditMode(true);

        if (value < 0) return setValidatorError("Incorrect value!");
        if (value <= startValue) return setValidatorError("The max value must be greater than the start value!");

        if (startValue >= 0) setValidatorError('');

    }

    const isValidatorError = validatorError ? true : false;

    return (
        <div className="counter" >
            <OptionsScreen>

                <OptionsField title="start value" inputValue={startValue} onInputChange={onStartValueChangeHandler} validationError={startValue >= maxValue || startValue < 0}/>
                <OptionsField title="max value" inputValue={maxValue} onInputChange={onMaxValueChangeHandler} validationError={startValue >= maxValue || maxValue < 0}/>

            </OptionsScreen>

            

            <div className="buttons_wrapper">
                <Button disabled={isValidatorError || !editMode} onClick={confirmNewOptions} title="set" />
            </div>
        </div>
    )
}

export default Options;


type OptionsPropsType = {
    editMode: boolean
    validatorError: string
    setValidatorError: (message: string) => void
    setEditMode: (isEditMode: boolean) =>void
    onNewOptionsConfirmed: (newOptions: CounterOptionsType) => void
}