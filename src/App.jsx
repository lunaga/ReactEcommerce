import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/variables.css"
import "./styles/global.css"
import NavBar from "./components/layouts/navbar/NavBar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import ItemDetail from "./components/pages/itemDetail/ItemDetail"
import Cart from "./components/pages/cart/Cart"
import Checkout from "./components/pages/checkout/Checkout"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  )
}

export default App


