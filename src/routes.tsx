import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import Burgerspage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import Drinkspage from './pages/Main/Drinks'
import IceCreamPage from './pages/Main/IceCream'


export function AppRoutes() {
  return (
    <Routes>

      <Route path='/' element={<MainPage />}>
      <Route path='/' element={<Burgerspage />} />
      <Route path='pizzas' element={<PizzasPage />} />
      <Route path='ice-creams' element={<IceCreamPage />} />
      <Route path='drinks' element={<Drinkspage />} />


      </Route>
    </Routes>
  )
}
