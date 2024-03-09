// import "./App.css";

let date = Date();

// т.е. props - объект, который принимает любые значения
// function Headers({ title }) - деструктуризация
export default function Headers(props) {
  return (
    <div className="headers">
      <h1>Это Headers</h1>
      {/* {инкапсуляция} */}
      <p>{date}</p>
      <p>
        {props.title} - {props.time}
      </p>
    </div>
  );
}
