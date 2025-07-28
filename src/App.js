import Saludo from "./Saludo";
import Contador from "./Contador";
function App() {
  return (
    <div>
      <h1>¡Buenas React!</h1>
      <p>Este es mi primer componente.</p>

      <Saludo nombre="Santi"/>
      <Saludo nombre="Lauri"/>

      <Contador />
    </div>
  );
}

export default App;
