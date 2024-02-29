import logger from "../logger/index.js";

export class OverwriteException extends Error {
  constructor(file: string) {
    const message = `Cannot create file ${file}!`;
    super(message);
    this.name = message;
    this.stack = "";
    logger.error(message);
    process.exit(1);
  }
}
