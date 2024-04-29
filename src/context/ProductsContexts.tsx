import { ReactNode, createContext, useReducer, useState } from 'react'
import {
  ActionTypes,
  NewProductsProps,
  ProductsReducers,
} from '../reducers/products'
import { coffees } from '../components/coffes/coffees'

// Aqui adiciona o tipagem do que esta sendo enviado para outras rotas

interface EnderecoClient {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

interface listOfMenuProductsType {
  id: number
  nome: string
  descricao: string
  preco: string
  qtdEstoque: number
  img: string
  tags: string
}

interface ProductContextType {
  coffeesInCart: NewProductsProps[]
  listCoffes: listOfMenuProductsType[]
  checkout: EnderecoClient
  addItem: (product: NewProductsProps) => void
  incrementItemQuantity: (id: number) => void
  decrementItemQuantity: (id: number) => void
  removeItem: (id: number) => void
  addDadosCheckout: (dados: EnderecoClient) => void
  resetTotalItem: () => void
}

export const ProductContext = createContext({} as ProductContextType)

// Tipando o children
interface ProductsContextProviderProps {
  children: ReactNode
}

// Inicio do componente
export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const listCoffes = coffees
  const [coffeesInCart, dispatch] = useReducer(ProductsReducers, [])
  const [checkout, setCheckout] = useState<EnderecoClient>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: '',
  })

  function addItem(product: NewProductsProps) {
    dispatch({
      type: ActionTypes.ADD_NEW_PURCHASE,
      payload: {
        data: product,
      },
    })
  }

  function incrementItemQuantity(id: number) {
    dispatch({
      type: ActionTypes.ADD_NEW_ITEM_LIST,
      payload: {
        data: id,
      },
    })
  }

  function decrementItemQuantity(id: number) {
    dispatch({
      type: ActionTypes.REMOVE_AMOUNT_ITEM_LIST,
      payload: {
        data: id,
      },
    })
  }

  function removeItem(id: number) {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: {
        data: id,
      },
    })
  }

  function resetTotalItem() {
    dispatch({
      type: ActionTypes.REMOVE_TOTAL_ITEM,
      payload: {
        data: 'remove total item',
      },
    })
  }

  function addDadosCheckout(dados: EnderecoClient) {
    setCheckout(dados)
  }

  return (
    <ProductContext.Provider
      value={{
        coffeesInCart,
        checkout,
        addItem,
        listCoffes,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
        addDadosCheckout,
        resetTotalItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
