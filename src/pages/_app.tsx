import { type AppType } from 'next/dist/shared/lib/utils';
import {
  ChakraProvider,
  type ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const theme = extendTheme({ config });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
