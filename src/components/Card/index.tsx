import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { CountAmountItens, ItensMenuContainer } from './styled'
import { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductsContexts'

interface listOfMenuProductsType {
  id: number
  nome: string
  descricao: string
  preco: string
  qtdEstoque: number
  img: string
  tags: string
}

interface listOfMenuProductsProps {
  products: listOfMenuProductsType
}

export function Card({ products }: listOfMenuProductsProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem } = useContext(ProductContext)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    setQuantity((state: number) => {
      if (state > 1) {
        return state - 1
      } else {
        return state
      }
    })
  }

  function PurchaseItens() {
    const list = {
      id: products.id,
      qtd: quantity,
      name: products.nome,
      valor: products.preco,
      imagem: products.img,
    }
    addItem(list)
  }

  return (
    <ItensMenuContainer>
      <img src={products.img} alt="" />
      <span>{products.tags}</span>
      <h3>{products.nome}</h3>
      <p>{products.descricao}</p>
      <div className="CountAmountProduct">
        <h2>
          R$ <strong>{products.preco}</strong>
        </h2>
        <>
          <CountAmountItens>
            <Minus size={14} weight="bold" onClick={decrementQuantity} />
            <input type="text" placeholder={String(quantity)} disabled />
            <Plus size={14} weight="bold" onClick={incrementQuantity} />
          </CountAmountItens>
          <button onClick={PurchaseItens}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </>
      </div>
    </ItensMenuContainer>
  )
}
