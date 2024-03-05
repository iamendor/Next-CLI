export interface ITransaction {
  operations?: IOperation[];
}

export interface IOperation {
  action: "CREATE";
  path: string;
  data: string;
}

export interface IRollback {
  action: "DELETE";
  path: string;
  exec?: boolean;
}
