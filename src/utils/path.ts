import { join } from "path";
import {
  IGeneratePath,
  RGeneratePath,
} from "../interfaces/utils/path.interface.js";

const interceptingLevels = {
  "0": "(.)",
  "1": "(..)",
  "2": "(..)(..)",
  root: "(...)",
};

function generatePath({
  path,
  filename,
  type = "default",
  level = "0",
}: IGeneratePath): RGeneratePath {
  const pathsplit = path.split("/").filter((i) => i != ".");
  const lastIndex = pathsplit.length - 1;
  if (pathsplit.length == 0)
    return {
      filepath: join(".", filename),
      name: getCurrentDirName(),
    };
  const name = pathsplit[lastIndex];
  switch (type) {
    case "dynamic":
      pathsplit[lastIndex] = `[${name}]`;
      break;
    case "parralel":
      pathsplit[lastIndex] = `@${name}`;
      break;
    case "intercepting":
      pathsplit[lastIndex] = `${interceptingLevels[level]}${name}`;
      break;
    default:
      break;
  }

  return { filepath: join(...pathsplit, filename), name };
}

function getCurrentDirName() {
  const curr = process.cwd().split("/");
  return curr[curr.length - 1];
}

export default generatePath;
