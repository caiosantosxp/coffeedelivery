import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  DadosContainer,
  DetalhePedido,
  GradientBorderContainer,
  PurchaseContainer,
} from './styled'
import motoboy from '../../assets/motoboy.png'

export function PurchaseCoffee() {
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
                <MapPin />
                <p>
                  Entrega em Rua joao Daniel Martinelli, 102 Farrapos - Porto
                  Alegre - RS
                </p>
              </div>
              <div>
                <Timer />
                <p>
                  Previssao de entrega
                  <strong>20min - 30min</strong>
                </p>
              </div>
              <div>
                <CurrencyDollar />
                <p>Pagamento na entrega Cartão de Crédito</p>
              </div>
            </DadosContainer>
          </DetalhePedido>
        </GradientBorderContainer>
        <div>
          <img src={motoboy} alt="" />
        </div>
      </PurchaseContainer>
    </>
  )
}
