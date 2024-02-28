import { IStyle } from "./style.interface.js";

export interface IGeneratePage {
  path: string;
  options: IGeneratePageOptions;
}

export interface IGeneratePageOptions {
  tsx: boolean;
  style: IStyle;
}
