import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  margin: 0px 160px 32px;
  gap: 12px;

  nav {
    display: flex;
    gap: 12px;
  }
`

const buttonHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
`

export const LocaleContainer = styled(buttonHeaderContainer)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled(buttonHeaderContainer)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  p {
    position: absolute;
    top: 35px;
    right: 194px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['--white']};
  }
`
