import React, { Component } from 'react';
import classes from './styles/InputForm.css';


const InputForm = () => {

    console.log(classes);

    return (
        <input className={classes.Inp} type="text"/>
    );
}
 
export default InputForm;