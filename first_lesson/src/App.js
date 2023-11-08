import React, { Component, useState } from 'react';
import Counter from './components/counter';

function App() {


    const [value, setValue] = useState('Текст в инпуте')


    

    return (
    <div className="App">
        <h1>{value}</h1>
        <input type='text'
        
        onChange={event => setValue(event.target.value)}

        />
        <Counter/>
        <Counter/>
        <Counter/>

    </div>
    );
}

export default App;
