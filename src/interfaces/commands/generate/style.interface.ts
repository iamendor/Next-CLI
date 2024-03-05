import { Transaction } from "../../../utils/transaction.js";
import { IInterceptingLevel } from "./level.interface.js";
import { IType } from "./type.interface.js";

export type IStyle = "css" | "no-style" | "scss" | false;

export interface IGenerateStyle {
  path: string;
  file: string;
  type: IType;
  level?: IInterceptingLevel;
  ts?: Transaction;
}
