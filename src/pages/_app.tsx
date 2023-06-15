import { type AppType } from 'next/dist/shared/lib/utils';
import {
  ChakraProvider,
  type ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';
import SideBar from '../components/sidebar';
import { QueryClient, QueryClientProvider } from 'react-query';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const queryClient = new QueryClient();

const theme = extendTheme({ config });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBar>
          <Component {...pageProps} />
        </SideBar>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
