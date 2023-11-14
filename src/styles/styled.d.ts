import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: {
      main: string;
      background: string;
    };
  }
}