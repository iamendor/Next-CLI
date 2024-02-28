import { IStyle } from "./style.interface.js";

export interface IGenerateResource {
  path: string;
  options: IGenerateResourceOptions;
}

export interface IGenerateResourceOptions {
  tsx: boolean;
  style: IStyle;
}
