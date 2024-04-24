import { Minus, Plus } from '@phosphor-icons/react'
import { CountAmountItensCheckout, ItemCheckout } from './styles'
import { useContext } from 'react'
import { ProductContext } from '../../../context/ProductsContexts'

interface item {
  id: number
  name: string
  imagem: string
  valor: string
  qtd: number
}

export function ItemCheckoutView({ id, name, imagem, valor, qtd }: item) {
  const valorReal = Number(valor)
  const { addItemList, removeAmountItemList, removeItem } =
    useContext(ProductContext)

  const valorTotal = valorReal * qtd
  return (
    <>
      <ItemCheckout>
        <img src={imagem} alt="" />
        <div>
          <strong>{name}</strong>
          <div style={{ display: 'flex' }}>
            <CountAmountItensCheckout>
              <Minus
                size={14}
                weight="bold"
                onClick={() => removeAmountItemList(id)}
              />
              <input type="text" placeholder={String(qtd)} disabled />
              <Plus size={14} weight="bold" onClick={() => addItemList(id)} />
            </CountAmountItensCheckout>
            <button onClick={() => removeItem(id)}>REMOVER</button>
          </div>
        </div>
        <p>R$ {valorTotal.toFixed(2)}</p>
      </ItemCheckout>
    </>
  )
}
