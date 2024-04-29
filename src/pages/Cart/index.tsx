import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
} from '@phosphor-icons/react'
import {
  CartContainer,
  CheckoutContainer,
  CountAmountItensCheckout,
  FormContainer,
  InfoPayment,
  ItemCheckout,
  PaymentContainer,
  SectionPayment,
  Titulo,
} from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

export function Carrinho() {
  const {
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    coffeesInCart,
    addDadosCheckout,
    resetTotalItem,
  } = useContext(ProductContext)

  const history = useNavigate()

  const FormularioValidacaoNovoEnderecoSchema = zod.object({
    cep: zod.string().min(7, 'Informe o Cep Correto!'),
    rua: zod.string().min(1, 'Informe a Rua'),
    numero: zod.string().min(1, 'Informe o Numero'),
    complemento: zod.string(),
    bairro: zod.string().min(1, 'Informe o Bairro'),
    cidade: zod.string().min(1, 'Informe a Cidade'),
    uf: zod.string().min(1, 'Informe o Estado'),
    payment: zod.string(),
  })

  type EnderecoClient = zod.infer<typeof FormularioValidacaoNovoEnderecoSchema>

  const { register, handleSubmit, reset, setValue } = useForm<EnderecoClient>({
    resolver: zodResolver(FormularioValidacaoNovoEnderecoSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const valorTotal = coffeesInCart.reduce(
    (total, numero) => total + Number(numero.valor),
    0,
  )

  function SubmitButton(data: EnderecoClient) {
    addDadosCheckout(data)
    history('/purchase')
    resetTotalItem()
    reset()
  }

  const valorFrete = 3.5

  return (
    <>
      <CartContainer>
        <div>
          <h1>Complete seu pedido</h1>
          <FormContainer>
            <h1>
              <MapPinLine size={22} color="#C47F17" />
              Endereço de Entrega
            </h1>
            <p> Informe o endereço onde deseja receber seu pedido</p>
            <form>
              <div className={'form'}>
                <div>
                  <input
                    type="text"
                    id="exampleInputEmail1"
                    placeholder="CEP"
                    {...register('cep')}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Rua"
                    style={{ width: '97%' }}
                    {...register('rua')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Numero"
                    style={{ width: '20%' }}
                    {...register('numero')}
                  />
                  <input
                    type="text"
                    style={{ width: '75%' }}
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    style={{ width: '35%' }}
                    {...register('bairro')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    style={{ width: '37%' }}
                    {...register('cidade')}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    style={{ width: '20%' }}
                    {...register('uf')}
                  />
                </div>
              </div>
            </form>
          </FormContainer>
          <div>
            <PaymentContainer>
              <div>
                <h1>
                  <CurrencyDollar color="#8047F8" /> Pagamento
                </h1>
                <p>
                  O pagmento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
              <SectionPayment>
                <div>
                  <button
                    value="credit_card"
                    onClick={() => setValue('payment', 'Cartão de Credito')}
                  >
                    <CreditCard color="#8047F8" />
                    Cartão de Crédito
                  </button>

                  <button
                    value="debit_card"
                    onClick={() => setValue('payment', 'Cartão de Debito')}
                  >
                    <Bank color="#8047F8" />
                    Cartão de Débito
                  </button>

                  <button
                    value="dinheiro"
                    onClick={() => setValue('payment', 'Dinheiro')}
                  >
                    <Money color="#8047F8" />
                    Dinheiro
                  </button>
                </div>
              </SectionPayment>
            </PaymentContainer>
          </div>
        </div>

        <Titulo>
          <h1>Café Selecionado</h1>
          <CheckoutContainer>
            {coffeesInCart.map((produto) => {
              // Verifica se o ID do produto está presente na lista de itens comprados
              return (
                <ItemCheckout key={produto.id}>
                  <img src={produto.imagem} alt="" />
                  <div>
                    <strong>{produto.name}</strong>
                    <div style={{ display: 'flex' }}>
                      <CountAmountItensCheckout>
                        <Minus
                          size={14}
                          weight="bold"
                          onClick={() => decrementItemQuantity(produto.id)}
                        />
                        <input
                          type="text"
                          placeholder={String(produto.qtd)}
                          disabled
                        />
                        <Plus
                          size={14}
                          weight="bold"
                          onClick={() => incrementItemQuantity(produto.id)}
                        />
                      </CountAmountItensCheckout>
                      <button onClick={() => removeItem(produto.id)}>
                        REMOVER
                      </button>
                    </div>
                  </div>
                  <p>R$ {produto.valor}</p>
                </ItemCheckout>
              )
            })}

            <InfoPayment>
              <div>
                <p>Total de itens</p>
                <p>Entrega</p>
                <strong> Total </strong>
              </div>
              <div>
                <p>R$ {valorTotal.toFixed(2)}</p>
                <p>R$ {valorFrete.toFixed(2)}</p>
                <strong>R$ {(valorFrete * valorTotal).toFixed(2)}</strong>
              </div>
            </InfoPayment>
            <button onClick={handleSubmit(SubmitButton)}>CONFIRMAR</button>
          </CheckoutContainer>
        </Titulo>
      </CartContainer>
    </>
  )
}
