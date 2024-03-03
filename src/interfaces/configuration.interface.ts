import { IRouteExtension } from "./commands/generate/extension.interface.js";
import { IRouteFunction } from "./commands/generate/route.interface.js";
import { IStyle } from "./commands/generate/style.interface.js";

export interface IConfiguration {
  extension: IRouteExtension;
  style: IStyle;
  generate: IConfigurationGenerate;
}

export interface IConfigurationGenerate {
  module: IConfigurationGenerateModule;
  route: IConfigurationGenerateRoute;
}

export interface IConfigurationGenerateRoute {
  handlers: IRouteFunction[];
  singleHandler: boolean;
}

export interface IConfigurationGenerateModule {
  error: boolean;
  loading: boolean;
  layout: boolean;
  notFound: boolean;
  mergeStyles: boolean;
}
