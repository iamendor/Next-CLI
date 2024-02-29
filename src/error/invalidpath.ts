import logger from "../logger/index.js";

export class InvalidPathException extends Error {
  constructor() {
    const message =
      "The provided path is invalid. If you want to use dynamic or parallel routes specify with --type flag\n\
      or specify with the dedicated flags, see --help!";
    super(message);
    this.name = "InvalidPathException";
    this.stack = "";
    logger.error(message);
    process.exit(1);
  }
}
