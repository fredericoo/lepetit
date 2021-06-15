import type { AppComponent } from 'next/dist/next-server/lib/router/router'

const App: AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
