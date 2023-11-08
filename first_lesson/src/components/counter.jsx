import React, { useState } from "react";

const Counter = function () {
    const [likes, setLikes] = useState(5)
    const [count, setCount] = useState(0)
    
    function Plus() {
        setCount(count + 1)
    }
    function Minus() {
        setCount(count - 1)
    }

    return (

        <div>
            <h1>{count}</h1>
            <button onClick={Plus}>Плюс</button>
            <button onClick={Minus}>Минус</button>
        </div>
    )
}

export default Counter