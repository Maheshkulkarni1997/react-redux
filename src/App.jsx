import { useState } from 'react'
import './App.css'
import ProductList from './features/products/ProductList'
import CartIcon from './components/CartIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <div style={{ padding: 40 }}>
      <h1>🛒 React 19 E-Commerce Example</h1>
      <ProductList />
      <CartIcon />
      {/* <Counter /> */}
    </div>
    </>
  )
}

export default App
