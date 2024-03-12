import "./App.css";
import Headers from "./components/Headers";
import List from "./components/LIst/List";

// Правило - писать с большой буквы названия компонента

export default function App() {
  return (
    <div className="App">
      <Headers title="name" time="9 match" />
      <h1>Hellow World</h1>
      <List />
    </div>
  );
}
