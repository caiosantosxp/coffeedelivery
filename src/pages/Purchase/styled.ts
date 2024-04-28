import styled from 'styled-components'

export type spanVariant = 'yellow' | 'yellowDark' | 'purple' | 'baseText'

interface BackgroundItensMenuProps {
  variant: spanVariant
}

const spanVariant = {
  yellow: 'yellow-normal',
  yellowDark: 'yellow-dark',
  purple: 'purple-normal',
  baseText: 'base-text',
} as const

export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 80px 160px;
`

export const DetalhePedido = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;
  }
  p {
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const ItemInfo = styled.div`
  margin-top: 20px;
  border: 1px solid transparent;
  width: 100%;
  border-radius: 6px 36px;
  background-origin: border-box;
  background-image: linear-gradient(to bottom right, yellow, purple);

`

export const InfoContainer = styled.div`
  padding: 40px;
  background-color: white;
  background-origin: border-box;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;


  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  
    > svg {
      padding: 8px;
      border-radius: 999px;
    } 
  }


  .textColuna {
    display: block;
  }

  strong {
    font-family: 'Baloo 2';
    font-size: 22px;
    font-weight: 700;
  }

  p {
  }
`

export const ImagemContainer = styled.div`
  margin-top: 50px;
`
export const IconeEstilizados = styled.strong<BackgroundItensMenuProps>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 50%;
  background: ${(props) => props.theme[spanVariant[props.variant]]};
  color: ${(props) => props.theme['--white']};
`
