import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer limit={1} hideProgressBar={true} />
    </ChakraProvider>
  )
}

export default MyApp
