import { ColorTypes } from "./constants/colors";

declare module "styled-components" {
  export interface DefaultTheme extends ColorTypes {}
}
