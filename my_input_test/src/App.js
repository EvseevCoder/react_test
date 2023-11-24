import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';

function App() {

	const click = () => {
		console.log('Срабатывание нашей функции');
	}

	return (
		<div className="App">
			<div className="container">
				<InputForm Fclick={click}/>
			</div>
		</div>
	);
}

export default App;
