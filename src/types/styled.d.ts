import 'styled-components'

declare module "styled-components" {
   export interface DefaultTheme {
      name: string;
      colors: {
         primary: string;
         secondary: string;
         greyColor: string;
         textColor: string;
         colorForToggle: string;
         hoverColor: string;
         hoverColorGrey: string;
      }
   }
}

