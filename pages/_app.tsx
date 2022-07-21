import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import '../styles/userInformation.scss'
import '../styles/userName.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer limit={1} hideProgressBar={true} />
    </>
  )
}

export default MyApp
