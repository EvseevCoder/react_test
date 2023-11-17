import React from 'react';
import classes from './MyInput.module.css'

const  MyInput = (propt) => {
    return (
        <input{...propt} className={classes.myInp}/>
    );
}


export default MyInput;