import styled from 'styled-components'

export const CartContainer = styled.main`
  display: flex;
  margin: 20px 160px;

  h1 {
    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    margin-left: 50px;
    margin-top: -5px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  * {
    margin: 8px 8px;
  }

  h1 {
    display: flex;
    align-self: stretch;
    gap: 3px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;

    align-items: center;
  }

  p {
    display: flex;
    align-self: stretch;
    gap: 3px;
    font-size: 16px;
    font-weight: 200;
    line-height: 1.3;

    align-items: center;
  }

  input {
    padding: 12px;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;

    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
  }
`

export const PaymentContainer = styled.div`
  display: flex;

  margin-top: 20px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  justify-content: center;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  h1 {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    gap: 4px;
  }

  p {
    display: flex;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-text']};
  }

  button {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 1px solid transparent;
    cursor: pointer;

    font-size: 12px;
    line-height: 1.6;
    text-transform: uppercase;

    padding: 10px 20px;
    border-radius: 6px;
    margin: 10px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    &:focus {
      background: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-normal']}; /* Adiciona uma borda de foco apenas quando o botão está focado */
    }

    &:hover {
      background: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-normal']};
    }
  }
`

export const Titulo = styled.div`
  margin-left: 32px;
`

export const CheckoutContainer = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};

  button {
    display: flex;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;

    border-radius: 6px;
    background: ${(props) => props.theme['yellow-normal']};
    color: ${(props) => props.theme['--white']};

    font-size: 14px;
    text-transform: uppercase;
    line-height: 1.6;
    font-weight: 700;
  }
`
export const InfoPayment = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 12px;
  align-self: stretch;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.3;
    font-weight: 400;

    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    text-align: right;

    color: ${(props) => props.theme['base-subtitle']};
  }

  * {
    padding-bottom: 12px;
  }
`

export const SectionPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  button {
    width: 200px;
  }
`

export const ItemCheckout = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  padding: 24px 0px 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    height: 32px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['base-text']};

    font-size: 12px;
    line-height: 1.6;
    text-transform: uppercase;
  }
`

export const CountAmountItensCheckout = styled.div`
  display: flex;
  margin-right: 8px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 14px;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  input {
    width: 20px;
    text-decoration: none;
    border: 0;
    background: transparent;
    text-align: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
