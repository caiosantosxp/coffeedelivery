import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from './context/ProductsContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
