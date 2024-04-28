import { Cart, HeaderContainer, LocaleContainer } from './styled'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { products } = useContext(ProductContext)

  const numberOfItems = products.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocaleContainer>
          <NavLink to="/" title="Home">
            <MapPin size={22} weight="fill" />
          </NavLink>
          Joinville - SC
        </LocaleContainer>

        <Cart>
          <NavLink to="/addtocart" title="Carrinho">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </NavLink>
          {numberOfItems ? <p>{numberOfItems}</p> : null}
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
