import { IGenerateResourceOptions } from "./resource.interface.js";

export interface IGenerateModule {
  path: string;
  options: IGenerateModuleOptions;
}

export interface IGenerateModuleOptions extends IGenerateResourceOptions {
  layout: boolean;
  loading: boolean;
  error: boolean;
  notFound: boolean;
}
