import { type AppType } from 'next/dist/shared/lib/utils';
import {
  ChakraProvider,
  type ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';
import SideBar from './components/navbar';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  );
};

export default MyApp;
