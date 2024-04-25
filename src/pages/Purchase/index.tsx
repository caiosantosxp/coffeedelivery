import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  DadosContainer,
  DetalhePedido,
  GradientBorderContainer,
  ImagemContainer,
  PurchaseContainer,
} from './styled'
import motoboy from '../../assets/motoboy.png'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'

export function PurchaseCoffee() {
  const { dadosCheckout } = useContext(ProductContext)

  return (
    <>
      <PurchaseContainer>
        <GradientBorderContainer>
          <DetalhePedido>
            <div>
              <h1>Uhu! Pedido confirmado</h1>
              <p>Agora é so aguardar que logo o café chegará até voce</p>
            </div>
            <DadosContainer>
              <div>
                <strong>
                  <MapPin size={22} />
                </strong>
                <p>
                  Entrega em Rua joao Daniel Martinelli, 102 Farrapos - Porto
                  Alegre - RS
                </p>
              </div>
              <div>
                <strong>
                  <Timer size={22}/>
                </strong>
                <p>
                  Previssao de entrega
                  <strong>20min - 30min</strong>
                </p>
              </div>
              <div>
                <strong>
                  <CurrencyDollar size={22}/>
                </strong>
                <p>Pagamento na entrega Cartão de Crédito</p>
              </div>
            </DadosContainer>
          </DetalhePedido>
        </GradientBorderContainer>
        <ImagemContainer>
          <img src={motoboy} alt="" />
        </ImagemContainer>
      </PurchaseContainer>
    </>
  )
}
