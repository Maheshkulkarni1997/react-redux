import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import ProductList from './features/products/ProductList'
import Cart from './components/Cart'
import CartIcon from './components/CartIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <div style={{ padding: 40 }}>
      <h1>🛒 Jaivardhan Shopping Center</h1>
      <ProductList />
      <CartIcon />
      {/* <Counter /> */}
    </div>
    </>
  )
}

export default App
