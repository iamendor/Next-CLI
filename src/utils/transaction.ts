import { unlink } from "fs/promises";
import {
  IOperation,
  IRollback,
  ITransaction,
} from "../interfaces/utils/transaction.interface.js";
import logger from "../logger/index.js";
import writeFile from "./writefile.js";
import { CREATE, DELETE } from "../actions.js";

export class Transaction {
  operations: IOperation[] = [];
  rollbacks: IRollback[] = [];
  success: boolean = true;

  constructor({ operations }: ITransaction) {
    if (operations) this.operations = operations;
  }

  private createRollback(path: string): IRollback {
    return { action: DELETE, path };
  }

  operation(op: IOperation) {
    this.operations.push(op);
    this.rollbacks.push(this.createRollback(op.path));
    return this;
  }

  async rollback() {
    for (let i = this.rollbacks.length - 1; i >= 0; i--) {
      const { path, action, exec } = this.rollbacks[i];

      if (exec) {
        try {
          if (action == DELETE) {
            await unlink(path);
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  async execute() {
    for (let i = 0; i < this.operations.length; i++) {
      const { action, data, path } = this.operations[i];
      try {
        if (action == CREATE) {
          await writeFile({ path: path, content: data, throwErr: false });
        }
        this.rollbacks[i]["exec"] = true;
      } catch (e) {
        this.success = false;
        logger.error(`Cannot ${action} ${path}`);
        break;
      }
    }
    if (!this.success) {
      return await this.rollback();
    }

    for (const op of this.operations) {
      logger.log(op.path, op.action);
    }
  }
}
