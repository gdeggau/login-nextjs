import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer autoClose={3000} draggable transition={Slide} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
