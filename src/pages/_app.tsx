import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Roboto} from 'next/font/google'
const roboto = Roboto({
  weight: '500',
  subsets:['latin'],
  variable: '--font-roboto',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
