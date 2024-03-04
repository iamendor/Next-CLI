#!/usr/bin/env node
import { Command } from "commander";
import { commandNotFound } from "./utils/listener.js";
import logger from "./logger/index.js";
import initCommands from "./commands.js";
import initConfig from "./config.js";
import { IConfiguration } from "./interfaces/configuration.interface.js";
const program = new Command();
program.version("1.0.1");
const configuration = initConfig();

initCommands(program, configuration as IConfiguration);

program.on("command:*", commandNotFound);
program.configureOutput({
  outputError: (str) => logger.error(str.replace("error: ", "")),
});
program.parse();
