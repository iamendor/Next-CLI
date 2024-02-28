import { IStyle } from "./style.interface.js";

export interface IGenerateError {
  path: string;
  options: IGenerateErrorOptions;
}

export interface IGenerateErrorOptions {
  tsx: boolean;
  style: IStyle
}
