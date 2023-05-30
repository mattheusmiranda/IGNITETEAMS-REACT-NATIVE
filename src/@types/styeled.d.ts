import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
    // Declarando um novo módulo para estender as definições de tipos do 'styled-components'

    type ThemeType = typeof theme; // Criando um novo tipo 'ThemeType' que é o tipo do objeto 'theme'

    export interface DefaultTheme extends ThemeType {
        // Estendendo a interface 'DefaultTheme' do 'styled-components' com o tipo 'ThemeType'
    }
}