// import "./App.css";

import { useState } from "react";
import Button from "./Button/Button";

let date = Date();

// т.е. props - объект, который принимает любые значения
// function Headers({ title }) - деструктуризация
export default function Headers(props) {
  let [scbka, setScbka] = useState(null);

  // пример прокидывания функции
  function handleClick(param) {
    if (typeof param == "string") {
      setScbka(param);
    } else {
      console.log("Нажатие на кнопку");
    }
  }

  return (
    <div className="headers">
      <h1>Это Headers</h1>
      {/* {инкапсуляция} */}
      {/* в ней же можно использовать тернарный оператор и if else */}
      <p>{date}</p>

      {/* Еще один пирмер использования оператора &&. Если true - возвращает правое значение */}
      {scbka && <p>Выбран элемент</p>}
      <p>
        {props.title} - {props.time} - {scbka}
      </p>

      {/* Аналог Slots */}
      <Button onClick={handleClick}>Тест children</Button>

      {/* Пример прокидывания параметров */}
      <Button isActive={scbka === "first"} onClick={() => handleClick("first")}>
        Первая кнопка
      </Button>
      <Button
        isActive={scbka === "second"}
        onClick={() => handleClick("second")}
      >
        Вторая кнопка
      </Button>
    </div>
  );
}
