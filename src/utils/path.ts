import { join } from "path";
import {
  IGeneratePath,
  RGeneratePath,
} from "../interfaces/utils/path.interface.js";

function generatePath({ path, filename }: IGeneratePath): RGeneratePath {
  const pathsplit = path.split("/").filter((i) => i != ".");
  if (pathsplit.length == 0)
    return {
      filepath: join(".", filename),
      name: getCurrentDirName(),
    };
  const name = pathsplit[pathsplit.length - 1];

  return { filepath: join(...pathsplit, filename), name };
}

function getCurrentDirName() {
  const curr = process.cwd().split("/");
  return curr[curr.length - 1];
}

export default generatePath;
