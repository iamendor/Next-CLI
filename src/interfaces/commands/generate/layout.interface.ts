import { IStyle } from "./style.interface.js";

export interface IGenerateLayout {
  path: string;
  options: IGenerateLayoutOptions;
}

export interface IGenerateLayoutOptions {
  tsx: boolean;
  style: IStyle;
}
