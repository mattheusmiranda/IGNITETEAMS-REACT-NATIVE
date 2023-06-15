import theme from './src/theme';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Groups } from '@screens/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
      />
      {fontsLoader ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
