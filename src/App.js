
import './styles.css';
import NavBar from "./componente/NavBar";

const name ="Cristian"

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Hello user: {name}</h1>
    </>
  )
}


export default App;
