import type { AppComponent } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'app/lib/theme';
import FontImports from 'app/components/FontImports';
import Navbar from 'app/components/Navbar';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <FontImports />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
