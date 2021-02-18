import { createGlobalStyle } from 'styled-components';
import { getTheme } from 'styled-toolset';

const white = getTheme('colors.white');
const black = getTheme('colors.black');
const fonts = getTheme('fonts.sanFrancisco');

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${white};
    color: ${black};
    font-family: ${fonts}, sans-serif;
  }
`;
