import { IComponentExtension } from "./extension.interface.js";
import { IStyle } from "./style.interface.js";

export interface IGenerateComponent {
  path: string;
  options: IGenerateComponentOptions;
}
export interface IGenerateComponentOptions {
  tsx?: boolean;
  extension: IComponentExtension;
  style: IStyle;
  scss?: boolean;
}
