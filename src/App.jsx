import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </main>
  )
}

export default App
