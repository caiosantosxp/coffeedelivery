import styled from 'styled-components'
import background from '../../assets/Background.png'

export const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 92px;
  margin: 0px -60px;
  background-image: url(${background});
  background-position: center;

  .imgCoffe {
    margin-right: 160px;
    width: 476px;
    height: 360px;
  }
`

export const BackgroundItens = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 140px;

  h2 {
    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 800;
    line-height: 1.3;
    padding-bottom: 16px;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 400;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
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

export const BackgroundItensMenu = styled.div`
  display: flex;
  width: 567px;
  height: 84px;
  padding-top: 66px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  p {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  p + p {
    padding-top: 22px;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    border-radius: 1000px;
  }
`


export const Itens = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 20px 160px 60px;

    display: flex;
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const MenuContainer = styled.div`
  display: flex;
  margin: 32px 160px 157px 160px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6.25rem;
`
