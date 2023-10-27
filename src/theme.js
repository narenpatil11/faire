import {createTheme} from "@mantine/core";

const myColor = [
  '#fff4e2',
  '#ffe9cc',
  '#ffd09c',
  '#fdb766',
  '#fca13a',
  '#fb931d',
  '#fc8c0c',
  '#e17900',
  '#c86a00',
  '#ae5a00'
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {myColor}
});
