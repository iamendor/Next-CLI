import { join, dirname } from "path";
import { existsSync } from "fs";
import logger from "./logger/index.js";
import { INFO } from "./actions.js";
import loadJson from "./utils/json.js";
import { IConfiguration } from "./interfaces/configuration.interface.js";

export default function init(): IConfiguration | null {
  const fileName = "next-cli.json";
  let curr = process.cwd();

  while (curr !== "/") {
    const configFile = join(curr, fileName);

    if (existsSync(configFile)) {
      return loadJson(configFile);
    }

    curr = dirname(curr);
  }

  logger.info("No configuration file found", INFO);
  return null;
}
