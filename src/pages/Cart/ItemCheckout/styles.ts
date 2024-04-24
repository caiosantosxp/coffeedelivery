import styled from 'styled-components'

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
