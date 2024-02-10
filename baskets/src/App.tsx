import './App.css'
import { Chart } from './Chart'
import { Dashboard } from './components/StyledDashboard'
import { Route, Routes } from 'react-router-dom'



export interface Cart {
  id: number
  products: Product[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface Product {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

const App = () => {

  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/chart/:id' element={<Chart/>}/>
      </Routes>
    </>
  )
}

export default App
