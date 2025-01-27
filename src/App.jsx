import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/variables.css"
import "./styles/global.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a PeachyPlatinums! Explora nuestra colección de juegos para PS3, PS4 y PS5." />
    </div>
  )
}

export default App


