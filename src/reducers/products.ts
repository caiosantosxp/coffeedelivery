export interface NewProductsProps {
  id: number
  qtd: number
  name: string
  valor: string
  imagem: string
}

interface ActionProps {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export enum ActionTypes {
  ADD_NEW_PURCHASE = 'ADD_NEW_PURCHASE',
  ADD_NEW_ITEM_LIST = 'ADD_NEW_ITEM_LIST',
  REMOVE_AMOUNT_ITEM_LIST = 'REMOVE_AMOUNT_ITEM_LIST',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function ProductsReducers(
  state: NewProductsProps[],
  action: ActionProps,
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PURCHASE: {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.data.id,
      )
      // Se o produto já está na lista
      if (itemIndex !== -1) {
        // Cria uma nova lista de itens com a quantidade atualizada
        const updatedList = [...state]
        updatedList[itemIndex] = {
          ...updatedList[itemIndex],
          qtd: updatedList[itemIndex].qtd + action.payload.data.qtd,
        }
        return updatedList
      } else {
        // Se o produto não está na lista, adiciona-o à lista
        return [...state, action.payload.data]
      }
    }

    case ActionTypes.ADD_NEW_ITEM_LIST: {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.data,
      )

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
    }

    case ActionTypes.REMOVE_AMOUNT_ITEM_LIST: {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.data,
      )
      if (itemIndex !== -1) {
        const updatedList = [...state]

        if (updatedList[itemIndex].qtd > 1) {
          updatedList[itemIndex] = {
            ...updatedList[itemIndex],
            qtd: updatedList[itemIndex].qtd - 1,
          }
        }
        return updatedList
      } else {
        return state
      }
    }

    case ActionTypes.REMOVE_ITEM: {
      const updatedList = state.filter(
        (item) => item.id !== action.payload.data,
      )
      return updatedList
    }

    default:
      return state
  }
}
