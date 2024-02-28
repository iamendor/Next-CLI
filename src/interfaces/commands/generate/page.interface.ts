export interface IGeneratePage {
  path: string;
  options: IGeneratePageOptions;
}

export interface IGeneratePageOptions {
  layout: boolean;
  loading: boolean;
}
