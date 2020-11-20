import { createGlobalStyle } from 'styled-components';

export const rootColors = {
  buttonBg: '#ff9000',
  inputBg: '#232129',
  linkColor: '#f4ede8',
  darkDefault: '#312E38',
  errorColor: '#c53030',
  successColor: '#2e656a',
  infoColor: '#3172b7',
  toastErrorBgColor: '#fddede',
  toastSuccessBgColor: '#e6fffa',
  toastInfoBgColor: '#ebf8ff',
};

export default createGlobalStyle`
 :root {
   --input-bg: ${rootColors.inputBg};
   --button-bg: ${rootColors.buttonBg};
   --link-color: ${rootColors.linkColor};
   --dark-default: ${rootColors.darkDefault};
   --error-color: ${rootColors.errorColor};
   --success-color: ${rootColors.successColor};
   --info-color: ${rootColors.infoColor};
   --toast-error-bg-color: ${rootColors.toastErrorBgColor};
   --toast-success-bg-color: ${rootColors.toastSuccessBgColor};
   --toast-info-bg-color: ${rootColors.toastInfoBgColor};

 }

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   outline: 0;
 }

 body {
   background-color: #f1faee;
   color: #e5e5e5;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }

 input, textarea {
   color: #000;
 }

 body, input, button {
   font-family: 'Nunito', sans-serif;
   font-size: 16px;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
 }

 button {
   cursor: pointer;
   border: none;
 }

 li {
   list-style: none;
 }

 a {
   text-decoration: none;
   color: inherit;
 }
`;
