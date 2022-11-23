import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
    </main>
  )
}

export default App
