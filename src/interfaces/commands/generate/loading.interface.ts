import { IStyle } from "./style.interface.js";

export interface IGenerateLoading {
  path: string;
  options: IGenerateLoadingOptions;
}

export interface IGenerateLoadingOptions {
  tsx: boolean;
  style: IStyle;
}
