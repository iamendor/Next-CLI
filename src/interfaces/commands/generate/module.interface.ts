import { IStyle } from "./style.interface.js";

export interface IGenerateModule {
  path: string;
  options: IGenerateModuleOptions;
}

export interface IGenerateModuleOptions {
  layout: boolean;
  loading: boolean;
  error: boolean;
  notFound: boolean;
  tsx: boolean;
  mergeStyles: boolean;
  style: IStyle;
  scss?: boolean;
}
