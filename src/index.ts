import { Command } from "commander";
import { commandNotFound } from "./utils/listener.js";
import logger from "./logger/index.js";
import initCommands from "./commands.js";
import initConfig from "./config.js";
import { IConfiguration } from "./interfaces/configuration.interface.js";
const dirname = import.meta.dirname;
console.log(dirname);
const program = new Command();
const configuration = initConfig();

initCommands(program, configuration as IConfiguration);

program.on("command:*", commandNotFound);
program.configureOutput({
  outputError: (str) => logger.error(str.replace("error: ", "")),
});
program.parse();
