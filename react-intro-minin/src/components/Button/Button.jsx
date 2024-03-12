import "./Button.css";

// принимаем children и функцию
export default function Button({ children, onClick, isActive }) {
  return (
    <button onClick={onClick} className={isActive ? "button active" : "button"}>
      {children}
    </button>
  );
}
