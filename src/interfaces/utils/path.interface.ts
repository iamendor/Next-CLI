import { IInterceptingLevel } from "../commands/generate/level.interface.js";
import { IType } from "../commands/generate/type.interface.js";

export interface IGeneratePath {
  path: string;
  filename: string;
  type?: IType;
  level?: IInterceptingLevel;
}

export interface RGeneratePath {
  filepath: string;
  name: string;
}
