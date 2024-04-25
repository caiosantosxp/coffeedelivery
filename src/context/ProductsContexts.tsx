import { ReactNode, createContext, useState } from 'react'
import coffe1 from '../assets/Products/item1.svg'
import coffe2 from '../assets/Products/item2.png'
import coffe3 from '../assets/Products/item3.svg'
import coffe4 from '../assets/Products/Type=Café com Leite.svg'
import coffe5 from '../assets/Products/Type=Café Gelado.svg'

// Aqui adiciona o tipagem do que esta sendo enviado para outras rotas
interface ItensListProduct {
  id: number
  qtd: number
  name: string
  valor: string
  imagem: string
}

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
  listItensPurchase: ItensListProduct[]
  listOfMenuProducts: listOfMenuProductsType[]
  dadosCheckout: EnderecoClient
  purchase: (product: ItensListProduct) => void
  addItemList: (id: number) => void
  removeAmountItemList: (id: number) => void
  removeItem: (id: number) => void
  addDadosCheckout: (dados: EnderecoClient) => void
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
  const listOfMenuProducts = [
    {
      id: 1,
      nome: 'Expresso Tradicional',
      descricao: 'O tradicional café feito com água quente e grãos moídos',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe1,
      tags: 'Tradicional',
    },

    {
      id: 2,
      nome: 'Expresso Americano',
      descricao: 'Expresso diluído, menos intenso que o tradicional',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe2,
      tags: 'Tradicional',
    },
    {
      id: 3,
      nome: 'Expresso Cremoso',
      descricao: 'Café expresso tradicional com espuma cremosa',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe3,
      tags: 'Tradicional',
    },
    {
      id: 4,
      nome: 'Expresso Geldado',
      descricao: 'Bebida preparada com café expresso e cubos de gelo',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe4,
      tags: 'Tradicional - Gelado',
    },
    {
      id: 5,
      nome: 'Café com leite',
      descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Tradicional - Com leite',
    },
    {
      id: 6,
      nome: 'Latte',
      descricao:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Tradicional - Com leite',
    },
    {
      id: 7,
      nome: 'Capuccino',
      descricao:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Tradicional - Com leite',
    },
    {
      id: 8,
      nome: 'Macchiato',
      descricao:
        'Café expresso misturado com um pouco de leite quente e espuma',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Tradicional - Com leite',
    },
    {
      id: 9,
      nome: 'Mocaccino',
      descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Tradicional - Com leite',
    },
    {
      id: 10,
      nome: 'Chocolate Quente',
      descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Especial - Com leite',
    },
    {
      id: 11,
      nome: 'Cubano',
      descricao:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Especial - Alcoolíco - Com leite',
    },
    {
      id: 12,
      nome: 'Havaiano',
      descricao: 'Bebida adocicada preparada com café e leite de coco',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Especial',
    },
    {
      id: 13,
      nome: 'Árabe',
      descricao: 'Bebida preparada com grãos de café árabe e especiarias',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Especial',
    },
    {
      id: 14,
      nome: 'Irlandês',
      descricao: 'Bebida a base de café, uísque irlandês, açúrcar e chantilly',
      preco: '9.90',
      qtdEstoque: 50,
      img: coffe5,
      tags: 'Especial - Alcoolíco',
    },
  ]

  const [listItensPurchase, setlistItensPurchase] = useState<
    ItensListProduct[]
  >([])

  const [dadosCheckout, setDadosCheckout] = useState<EnderecoClient>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: '',
  })

  function purchase(product: ItensListProduct) {
    setlistItensPurchase((state) => {
      const itemIndex = state.findIndex((item) => item.id === product.id)

      // Se o produto já está na lista
      if (itemIndex !== -1) {
        // Cria uma nova lista de itens com a quantidade atualizada
        const updatedList = [...state]
        updatedList[itemIndex] = {
          ...updatedList[itemIndex],
          qtd: updatedList[itemIndex].qtd + product.qtd,
        }
        return updatedList
      } else {
        // Se o produto não está na lista, adiciona-o à lista
        return [...state, product]
      }
    })
  }

  function addItemList(id: number) {
    setlistItensPurchase((state) => {
      const itemIndex = state.findIndex((item) => item.id === id)

      // Se o produto já está na lista
      if (itemIndex !== -1) {
        // Cria uma nova lista de itens com a quantidade atualizada
        const updatedList = [...state]
        updatedList[itemIndex] = {
          ...updatedList[itemIndex],
          qtd: updatedList[itemIndex].qtd + 1,
        }
        return updatedList
      } else {
        // Se o produto não está na lista, adiciona-o à lista
        return state
      }
    })
  }

  function removeAmountItemList(id: number) {
    setlistItensPurchase((state) => {
      const itemIndex = state.findIndex((item) => item.id === id)

      // Se o produto já está na lista
      if (itemIndex !== -1) {
        // Cria uma nova lista de itens com a quantidade atualizada
        const updatedList = [...state]

        if (updatedList[itemIndex].qtd > 1) {
          updatedList[itemIndex] = {
            ...updatedList[itemIndex],
            qtd: updatedList[itemIndex].qtd - 1,
          }
        }
        return updatedList
      } else {
        // Se o produto não está na lista, adiciona-o à lista
        return state
      }
    })
  }

  function removeItem(id: number) {
    const updatedList = listItensPurchase.filter((item) => item.id !== id)
    setlistItensPurchase(updatedList)
  }

  function addDadosCheckout(dados: EnderecoClient) {
    setDadosCheckout(dados)
  }

  return (
    <ProductContext.Provider
      value={{
        listItensPurchase,
        dadosCheckout,
        purchase,
        listOfMenuProducts,
        addItemList,
        removeAmountItemList,
        removeItem,
        addDadosCheckout,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
