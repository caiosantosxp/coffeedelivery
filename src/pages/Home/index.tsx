import {
  BackgroundContainer,
  BackgroundItens,
  BackgroundItensMenu,
  Itens,
  MenuContainer,
} from './styled'
import coffeeBackground from '../../assets/coffe-background.png'

import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'

import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'
import { Card } from '../../components/Card'
import { useTheme } from 'styled-components'

export function Home() {
  const { coffees } = useContext(ProductContext)
  const theme = useTheme()
  return (
    <>
      <BackgroundContainer>
        <BackgroundItens>
          <h2>Encontre o café perfeito</h2>
          <h2>para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery voce recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BackgroundItensMenu>
            <div>
              <p>

                  <ShoppingCartSimple size={16} weight="fill" />

                Compra simples e segura
              </p>
              <p>

                  <Timer size={16} weight="fill" style={{ backgroundColor: theme['yellow-dark'], color: theme['--white']}} />

                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>

                  <Package size={16} weight="fill" />

                Embalagem mantém o café intacto
              </p>
              <p>

                  <Coffee size={16} color={theme['background-cor']} weight="fill"  style={{ backgroundColor: theme['yellow-dark'], color: theme['--white']}} />

                O café chega fresquinho até vocÊ
              </p>
            </div>
          </BackgroundItensMenu>
        </BackgroundItens>
        <div className="imgCoffe">
          <img src={coffeeBackground} alt="" />
        </div>
      </BackgroundContainer>
      <Itens>
        <h1>Nossos cafés</h1>
        <MenuContainer>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} products={coffee} />
          })}
        </MenuContainer>
      </Itens>
    </>
  )
}
