import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  DadosContainer,
  DetalhePedido,
  GradientBorderContainer,
  IconeEstilizados,
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
                <IconeEstilizados variant={'purple'}>
                  <MapPin size={22} weight="fill" />
                </IconeEstilizados>
                <div className="textColuna">
                  <p>
                    Entrega em{' '}
                    <strong>
                      {dadosCheckout.rua}, {dadosCheckout.numero}
                    </strong>{' '}
                  </p>
                  <p>
                    {dadosCheckout.bairro} - {dadosCheckout.cidade} -{' '}
                    {dadosCheckout.uf}
                  </p>
                </div>
              </div>

              <div>
                <IconeEstilizados variant={'yellow'}>
                  <Timer size={22} weight="fill" />
                </IconeEstilizados>

                <div className="textColuna">
                  <p>Previssao de entrega </p>
                  <strong>20min - 30min</strong>
                </div>
              </div>

              <div>
                <IconeEstilizados variant={'yellowDark'}>
                  <CurrencyDollar size={22} weight="fill" />
                </IconeEstilizados>
                <div className="textColuna">
                  <p>Pagamento na entrega </p>
                  <p>
                    <strong>{dadosCheckout.payment}</strong>
                  </p>
                </div>
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
