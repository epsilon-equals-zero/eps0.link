import '@/styles/globals.css'
import { Playfair_Display } from "next/font/google";
import type { AppProps } from 'next/app'

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={playfair.className}>
        <Component {...pageProps} />
    </div>
}
