import { IRouteExtension } from "./extension.interface.js";
import { IRouteType } from "./type.interface.js";

export type IRouteFunction =
  | "GET"
  | "POST"
  | "PUT"
  | "PUT"
  | "PATCH"
  | "DELETE";

export interface IGenerateRoute {
  path: string;
  options: IGenerateRouteOptions;
}

export interface IGenerateRouteOptions {
  extension: IRouteExtension;
  handlers: IRouteFunction[];
  singleHandler?: boolean;
  type: IRouteType;
}
