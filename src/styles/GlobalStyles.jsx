import { css } from '@emotion/react';
import 'modern-normalize';
import manropeRegular from '../fonts/Manrope-Regular.woff';
import manropeRegularSecond from '../fonts/Manrope-Regular.woff2';
import manropeMedium from '../fonts/Manrope-Medium.woff';
import manropeMediumSecond from '../fonts/Manrope-Medium.woff2';
import manropeSemiBold from '../fonts/Manrope-SemiBold.woff';
import manropeSemiBoldSecond from '../fonts/Manrope-SemiBold.woff2';

export const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Manrope', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${manropeRegular}), url(${manropeRegularSecond});
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${manropeMedium}), url(${manropeMediumSecond});
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${manropeSemiBold}), url(${manropeSemiBoldSecond});
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }
`;
