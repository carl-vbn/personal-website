import Background from '@/common/background';
import Navbar from '@/common/navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Background />
    <Navbar />
    <Component {...pageProps} />
  </>;
}
