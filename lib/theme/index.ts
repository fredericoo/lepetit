import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import colors from './colors';
import global from './global';
import components from './components';

const theme = extendTheme({
  fonts,
  colors,
  styles: { global },
  components,
  shadows: { outline: 'none' },
});

export default theme;
