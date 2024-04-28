import styled from 'styled-components'

export const ItensMenuContainer = styled.div`
  width: 256px;
  height: 310px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    display: flex;
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;
  }

  span {
    margin: 12px 19px 16px;
    padding: 4px 8px;
    border-radius: 4px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-size: 10px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
  }

  p {
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;

    text-align: center;
    color: ${(props) => props.theme['base-blabel']};
  }

  div {
    display: flex;
    margin: 20px 8px;
    align-items: center;
    justify-content: space-between;

    h2 {
      display: flex;
      text-align: right;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.3;
      justify-content: center;
      align-items: center;
      gap: 4px;

      color: ${(props) => props.theme['base-text']};

      strong {
        font-family: 'Baloo 2';
        font-size: 24px;
        font-weight: 800;
        line-height: 1.3;
      }
    }

    button {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 8px;

      border-radius: 6px;
      background: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['--white']};
    }
  }
`

export const CountAmountItens = styled.div`
  display: flex;
  height: 38px;
  padding: 8px;
  gap: 8px;
  margin: 12px;

  font-size: 14px;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  input {
    width: 25px;
    text-decoration: none;
    border: 0;
    background: transparent;
    text-align: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

