import '../styles/globals.css'
import '../styles/magic.min.css'
import '../core-ui/style/index.scss'
import type { AppProps } from 'next/app'
import Layout from '../Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
