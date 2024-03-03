import { join, dirname } from "path";
import { existsSync } from "fs";
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

  return null;
}
