import { IStyle } from "../commands/generate/style.interface.js";

export interface IGenerateStyleName {
  style: IStyle;
  mergeStyles: boolean;
  name: string;
  default: string;
}
