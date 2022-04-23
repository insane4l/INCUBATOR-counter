import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import Options from './components/Options/Options';
import { AppStateType } from './redux/store';

function App() {

	const optionsValueError = useSelector<AppStateType, string>(state => state.counter.optionValueError);
	const optionEditMode = useSelector<AppStateType, boolean>(state => state.counter.optionEditMode);

	return (
		<div className="App">
			<Options 
				editMode={optionEditMode} 
				validatorError={optionsValueError} />
				
			<Counter 
				editMode={optionEditMode}
				validatorError={optionsValueError} />
		</div>
	);
}

export default App;
