// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";


declare module "@mui/material/styles/createPalette" {
  //extending theme.ts so that our color 100:Light matches
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}