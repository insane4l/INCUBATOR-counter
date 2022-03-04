import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Options from './components/Options/Options';

function App() {

	let savedOptions = localStorage.getItem('options');
	let counterOptionsObj = savedOptions ? JSON.parse(savedOptions) : {startValue: 0, maxValue: 5};

	const [counterOptions, setCounterOptions] = useState<CounterOptionsType>(counterOptionsObj);
	const [counterValue, setCounterValue] = useState(counterOptions.startValue);

	const [editMode, setEditMode] = useState(true);
	const [validatorError, setValidatorError] = useState('');


	useEffect(() => {
		localStorage.setItem('options', JSON.stringify(counterOptions));
	}, [counterOptions]);

	const onNewOptionsConfirmed = (newOptions: CounterOptionsType) => {
		setCounterOptions(newOptions);
		setCounterValue(newOptions.startValue);
		setEditMode(false);

		// localStorage.setItem('options', JSON.stringify(newOptions))
	}

	return (
		<div className="App">
			<Options 
				onNewOptionsConfirmed={onNewOptionsConfirmed}
				editMode={editMode} 
				setEditMode={setEditMode} 
				validatorError={validatorError} 
				setValidatorError={setValidatorError} 
				counterOptions={counterOptions}/>
				
			<Counter 
				counterOptions={counterOptions}
				counterValue={counterValue}
				setCounterValue={setCounterValue}
				validatorError={validatorError}
				editMode={editMode}/>
		</div>
	);
}

export default App;


export type CounterOptionsType = {
	startValue: number
	maxValue: number
}
