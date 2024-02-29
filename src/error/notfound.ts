import logger from "../logger/index.js";

export class CommandNotFoundException extends Error {
  constructor(command: string) {
    const message = `Command not found: ${command}`;
    super(message);
    this.name = message;
    this.stack = "";
    logger.error(message);
    process.exit(1);
  }
}
