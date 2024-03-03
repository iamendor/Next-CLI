import { constants, copyFile } from "fs/promises";
import { join } from "path";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import { OverwriteException } from "../../error/overwrite.js";

export default async function initConfig(rootPath: string) {
  const fileName = "next-cli.json";
  const cwd = process.cwd();
  try {
    await copyFile(
      join(rootPath, "defaults", "config.json"),
      join(cwd, fileName),
      constants.COPYFILE_EXCL,
    );
  } catch (e) {
    throw new OverwriteException(join(cwd, fileName));
  }

  logger.log("Configuration file created successfully!", CREATE);
}
