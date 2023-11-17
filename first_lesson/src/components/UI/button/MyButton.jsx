import React from 'react';
import classes from './Mybutton.module.css'


const MyButton = (propt) => {
    return (
        <button {...propt} className={classes.myBth}>{propt.children}</button>
    );
}
 
export default MyButton;