import { Command } from "commander";
import { commandNotFound } from "./utils/listener.js";
import logger from "./logger/index.js";
import init from "./commands.js";

const program = new Command();

init(program);

program.on("command:*", commandNotFound);
program.configureOutput({
  outputError: (str) => logger.error(str.replace("error: ", "")),
});
program.parse();
