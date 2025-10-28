// App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import ProductListing from './pages/productListing.jsx'
import ShoppingCart from './pages/shoppingCart.jsx'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/product" element={<ProductListing />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App
