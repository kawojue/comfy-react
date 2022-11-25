import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Products from './components/Products'
import NotFound from './components/NotFound'
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
