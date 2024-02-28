import { mkdir, writeFile as fsWriteFile, promises } from "fs";
import { dirname } from "path";

interface IWriteFile {
  path: string;
  content: string;
}

export default async function writeFile({ path, content }: IWriteFile) {
  await promises.mkdir(dirname(path), { recursive: true });
  const file = await promises.writeFile(path, content);
  return file;
}
