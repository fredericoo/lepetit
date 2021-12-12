import { ChakraProvider } from '@chakra-ui/react';
import theme from 'app/lib/theme';
// import FontImports from 'app/components/FontImports';
import Navbar from 'app/components/Navbar';
import Footer from 'app/components/Footer';
import { AppComponent } from 'next/dist/shared/lib/router/router';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {/* <FontImports /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer data={pageProps?.headerAndFooter?.data} />
    </ChakraProvider>
  );
};

export default App;
