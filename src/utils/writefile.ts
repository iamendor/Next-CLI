import { mkdir, writeFile as fsWriteFile } from "fs";
import { dirname } from "path";

interface IWriteFile {
  path: string;
  content: string;
  cb: (err?: any | undefined) => void;
}

export default function writeFile({ path, content, cb }: IWriteFile) {
  mkdir(dirname(path), { recursive: true }, (err) => {
    if (err) return cb(err);

    fsWriteFile(path, content, cb);
  });
}
