import { IType } from "../commands/generate/type.interface.js";

export interface IGeneratePath {
  path: string;
  filename: string;
  type?: IType;
}

export interface RGeneratePath {
  filepath: string;
  name: string;
}
