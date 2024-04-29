import {
  BackgroundContainer,
  BackgroundItens,
  BackgroundItensMenu,
  IconBackgroun,
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

export function Home() {
  const { listCoffes } = useContext(ProductContext)
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
                <IconBackgroun variant="yellowDark">
                  <ShoppingCartSimple size={16} weight="fill" />
                </IconBackgroun>
                Compra simples e segura
              </p>
              <p>
                <IconBackgroun variant="purple">
                  <Timer size={16} weight="fill" />
                </IconBackgroun>
                Entrega rápida e rastreada
              </p>
            </div>
            <div>
              <p>
                <IconBackgroun variant="baseText">
                  <Package size={16} weight="fill" />
                </IconBackgroun>
                Embalagem mantém o café intacto
              </p>
              <p>
                <IconBackgroun variant="yellow">
                  <Coffee size={16} weight="fill" />
                </IconBackgroun>
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
          {listCoffes.map((coffee) => {
            return <Card key={coffee.id} products={coffee} />
          })}
        </MenuContainer>
      </Itens>
    </>
  )
}
