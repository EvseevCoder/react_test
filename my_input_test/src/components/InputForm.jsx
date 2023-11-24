import { useState } from 'react';
import classes from './styles/InputForm.module.css';


const InputForm = ({Fclick}) => {

    const [posts, setPost] = useState('Текст поста')

    return (
        <div className={classes.inp_obj}>
            <input className={classes.Inp} type="text"/>

            <button onClick={Fclick} className={classes.button}>Кнопка</button>
        </div>
    );
}
 
export default InputForm;