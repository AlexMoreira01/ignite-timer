import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Sobreescrevendo uma tipagem para esse modulo
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
