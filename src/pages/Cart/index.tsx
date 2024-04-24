import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  CartContainer,
  CheckoutContainer,
  FormContainer,
  PaymentContainer,
  Titulo,
} from './styles'
import { ItemCheckoutView } from './ItemCheckout'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContexts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

// interface EnderecoClient {
//   cep: string
//   rua: string
//   numero: string
//   complemento?: string
//   bairro: string
//   cidade: string
//   uf: string
// }

export function Carrinho() {
  const { listItensPurchase } = useContext(ProductContext)

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

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<EnderecoClient>({
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
  const soma = listItensPurchase.reduce(
    (total, numero) => total + Number(numero.valor),
    0,
  )

  if (formState.errors.rua) {
    console.log(formState.errors)
  }

  function SubmitButton(data: EnderecoClient) {
    console.log(data)
    history('/addtocart')
    reset()
  }

  const valorcomfrete = soma + 3.5

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
              <div>
                <input
                  type="text"
                  id="exampleInputEmail1"
                  placeholder="CEP"
                  style={{ width: '97%' }}
                  {...register('cep')}
                />
              </div>
              <div className={'form'}>
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
                    placeholder="Complemento"
                    style={{ width: '75%' }}
                    {...register('complemento')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    style={{ width: '30%' }}
                    {...register('bairro')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    style={{ width: '50%' }}
                    {...register('cidade')}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    style={{ width: '12%' }}
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
              <div className={'butoesSelection'}>
                <button
                  value="credit_card"
                  onClick={() => setValue('payment', 'credit_card')}
                >
                  <CreditCard color="#8047F8" />
                  Cartão de Crédito
                </button>

                <button
                  value="debit_card"
                  onClick={() => setValue('payment', 'debit_card')}
                >
                  <Bank color="#8047F8" />
                  Cartão de Débito
                </button>

                <button
                  value="dinheiro"
                  onClick={() => setValue('payment', 'dinheiro')}
                >
                  <Money color="#8047F8" />
                  Dinheiro
                </button>
              </div>
            </PaymentContainer>
          </div>
        </div>

        <Titulo>
          <h1>Café Selecionado</h1>
          <CheckoutContainer>
            {listItensPurchase.map((produto) => {
              // Verifica se o ID do produto está presente na lista de itens comprados

              return (
                <ItemCheckoutView
                  key={produto.id}
                  id={produto.id}
                  name={produto.name}
                  imagem={produto.imagem}
                  valor={produto.valor}
                  qtd={produto.qtd} // Usando a quantidade do item comprado
                />
              )
            })}

            <div className={'totalcountlist'}>
              <div>
                <p>Total de itens</p>
                <p>Entrega</p>
                <strong> Total </strong>
              </div>
              <div>
                <p>R$ {soma.toFixed(2)}</p>
                <p>R$ 3.50</p>
                <strong>R$ {valorcomfrete.toFixed(2)}</strong>
              </div>
            </div>
            <button onClick={handleSubmit(SubmitButton)}>CONFIRMAR</button>
          </CheckoutContainer>
        </Titulo>
      </CartContainer>
    </>
  )
}