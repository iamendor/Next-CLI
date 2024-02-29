import { promises } from "fs";
import { dirname } from "path";
import { IWriteFile } from "../interfaces/utils/writefile.interface.js";
import { OverwriteException } from "../error/overwrite.js";

export default async function writeFile({ path, content }: IWriteFile) {
  await promises.mkdir(dirname(path), { recursive: true });
  try {
    const file = await promises.writeFile(path, content || "", { flag: "wx" });
    return file;
  } catch (e) {
    throw new OverwriteException(path);
  }
}
