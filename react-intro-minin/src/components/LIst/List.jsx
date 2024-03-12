import "./List.css";

let list = ["Запись 1", "Запись 2", "Запись 3", "Запись 4", "asdasdasd"];

/* работа со списком */

export default function List() {
  return (
    <div>
      <ol>
        {list.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ol>
    </div>
  );
}
