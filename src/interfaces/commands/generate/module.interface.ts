export interface IGenerateModule {
  path: string;
  options: IGenerateModuleOptions;
}

export interface IGenerateModuleOptions {
  layout: boolean;
  loading: boolean;
  error: boolean;
  tsx: boolean;
}
