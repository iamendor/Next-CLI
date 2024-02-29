import { IType } from "./type.interface.js";

export type IStyle = "css" | "no-style" | false;

export interface IGenerateStyle {
  path: string;
  file: string;
  type: IType;
}
