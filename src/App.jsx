import { productos } from "../src/utils/productos";
import Card from "./Components/Card";
import "../src/Styles/styles.css"

function App() {
  return (
    <div>
      <h1>Productos</h1>

      <ul className="list-container">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </ul>
    </div>
  );
}

export default App;
