import { DarkModeProvider } from '@/contexts/darkModeContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from 'next/app'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
    return <DarkModeProvider><Component {...pageProps} /></DarkModeProvider>
}

