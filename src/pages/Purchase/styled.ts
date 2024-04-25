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

export const GradientBorderContainer = styled.div`
  display: inline-block; /* Garante que o elemento envolvente se ajuste ao conteúdo */
  border-radius: 80px; /* Define as bordas arredondadas */
`

export const DadosContainer = styled.div`
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  overflow: hidden;
  margin: 40px 0;

  border: 1px solid transparent; /* Define a borda como transparente para que o gradiente seja visível */
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-normal']},
      ${(props) => props.theme['purple-normal']}
    )
    1;

  /* Adiciona bordas arredondadas */
  border-radius: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
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
