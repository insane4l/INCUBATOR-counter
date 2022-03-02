import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
	return (
		<div className="App">
			<Counter startValue={0} maxValue={5}/>
		</div>
	);
}

export default App;
