import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    primary: string;
    secondary: string;
    textDark: string;
    textLight: string;
    mainBg: string;
    greyBg: string;
    themeBtn: string;
    themeIcon: string;
    sidebarborder: string;
    accent: string;
    footerIcon: string;
    footerIconHover: string;
  }
}

export const LightTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#414141',
  textDark: '#4e4e4e',
  textLight: '#e4e4e4',
  mainBg: '#f3eeee',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#eba93e',
  sidebarBorder: '#b1b1b1',
  accent: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};

export const DarkTheme: DefaultTheme = {
  primary: '#292a3b',
  secondary: '#dedede',
  textDark: '#d3d3d3',
  textLight: '#e4e4e4',
  mainBg: '#25292E',
  greyBg: '#d8dcd6',
  themeBtn: '#737373',
  themeIcon: '#eba93e',
  sidebarBorder: '#5e5e5e',
  accent: '#6590ab',
  footerIcon: '#737373',
  footerIconHover: '#4c96c1',
};