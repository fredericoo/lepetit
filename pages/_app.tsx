import type { AppComponent } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
