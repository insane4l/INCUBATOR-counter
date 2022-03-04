import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Options from './components/Options/Options';

function App() {

	let counterOptionsObj = {startValue: 0, maxValue: 5};

	// useEffect(if (localStorage.getItem) ... parse .... counterOptionsObj = ..., [])

	const [counterOptions, setCounterOptions] = useState<CounterOptionsType>(counterOptionsObj);
	const [counterValue, setCounterValue] = useState(counterOptions.startValue);

	const [editMode, setEditMode] = useState(true);
	const [validatorError, setValidatorError] = useState('');


	
	const onNewOptionsConfirmed = (newOptions: CounterOptionsType) => {
		setCounterOptions(newOptions);
		setCounterValue(newOptions.startValue);
		setEditMode(false);

		//localStorage.setItem(JSON.stringify(newOptions))
	}

	return (
		<div className="App">
			<Options onNewOptionsConfirmed={onNewOptionsConfirmed} editMode={editMode} setEditMode={setEditMode} validatorError={validatorError} setValidatorError={setValidatorError}/>
			<Counter counterOptions={counterOptions} counterValue={counterValue} setCounterValue={setCounterValue} validatorError={validatorError} editMode={editMode}/>
		</div>
	);
}

export default App;


export type CounterOptionsType = {
	startValue: number
	maxValue: number
}
