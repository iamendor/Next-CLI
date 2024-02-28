import { promises } from "fs";
import { dirname } from "path";
import { IWriteFile } from "../interfaces/utils/writefile.interface.js";

export default async function writeFile({ path, content }: IWriteFile) {
  await promises.mkdir(dirname(path), { recursive: true });
  const file = await promises.writeFile(path, content || "");
  return file;
}
