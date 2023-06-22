import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
      />
      {fontsLoader ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
