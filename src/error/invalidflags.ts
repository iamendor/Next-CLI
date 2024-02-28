import logger from "../logger/index.js";

export class FlagOverlapException extends Error {
  constructor() {
    const message = "Cannot use these flags together!";
    super(message);
    this.name = "FlagOverlapException";
    this.stack = "";
    logger.error(message);
  }
}
