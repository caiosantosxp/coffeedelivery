import { Routes, Route } from 'react-router-dom'
import { Carrinho } from './pages/Cart'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { PurchaseCoffee } from './pages/Purchase'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addtocart" element={<Carrinho />} />
        <Route path="/purchase" element={<PurchaseCoffee />} />
      </Route>
    </Routes>
  )
}
