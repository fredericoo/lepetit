import type { AppComponent } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';
import FontImports from '../components/FontImports/FontImports';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <FontImports />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
