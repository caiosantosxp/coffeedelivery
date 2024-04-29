import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  InfoContainer,
  DetalhePedido,
  IconeEstilizados,
  ImagemContainer,
  PurchaseContainer,
  ItemInfo,
} from './styled'
import motoboy from '../../assets/motoboy.png'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'

export function PurchaseCoffee() {
  const { checkout } = useContext(ProductContext)

  return (
    <>
      <PurchaseContainer>
        <DetalhePedido>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é so aguardar que logo o café chegará até voce</p>
          </div>
          <ItemInfo>
            <InfoContainer>
              <div>
                <IconeEstilizados variant={'purple'}>
                  <MapPin size={22} weight="fill" />
                </IconeEstilizados>
                <div className="textColuna">
                  <p>
                    Entrega em{' '}
                    <strong>
                      {checkout.rua}, {checkout.numero}
                    </strong>{' '}
                  </p>
                  <p>
                    {checkout.bairro} - {checkout.cidade} - {checkout.uf}
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
                    <strong>{checkout.payment}</strong>
                  </p>
                </div>
              </div>
            </InfoContainer>
          </ItemInfo>
        </DetalhePedido>
        <ImagemContainer>
          <img src={motoboy} alt="" />
        </ImagemContainer>
      </PurchaseContainer>
    </>
  )
}
