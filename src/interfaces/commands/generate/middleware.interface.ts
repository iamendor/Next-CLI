import { IRouteExtension } from "./extension.interface.js";

export interface IGenerateMiddleware {
  path: string;
  options: IGenerateMiddlewareOptions;
}

export interface IGenerateMiddlewareOptions {
  extension: IRouteExtension;
  matcher: string[];
}
