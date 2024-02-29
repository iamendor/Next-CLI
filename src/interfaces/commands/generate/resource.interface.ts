import { IInterceptingLevel } from "./level.interface.js";
import { IStyle } from "./style.interface.js";
import { IType } from "./type.interface.js";

export interface IGenerateResource {
  path: string;
  options: IGenerateResourceOptions;
}

export interface IGenerateResourceOptions {
  tsx: boolean;
  style: IStyle;
  mergeStyles?: boolean;
  scss?: boolean;
  dynamic?: boolean;
  parralel?: boolean;
  intercepting?: boolean;
  level?: IInterceptingLevel;
  type: IType;
}
