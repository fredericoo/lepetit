import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import colors from './colors';
import global from './global';

const theme = extendTheme({ fonts, colors, styles: { global } });

export default theme;
