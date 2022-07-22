import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IntlProvider defaultLocale="en" locale="en">
        <ChakraProvider>
          <Component {...pageProps} />
          <ToastContainer limit={1} hideProgressBar={true} />
        </ChakraProvider>
      </IntlProvider>
    </>
  )
}

export default MyApp
