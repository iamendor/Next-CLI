import { CREATE } from "../../actions.js";
import { IGenerateStyle } from "../../interfaces/commands/generate/style.interface.js";
import logger from "../../logger/index.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";

export default async function generateStyle({
  path,
  file,
  type,
  level,
  ts,
}: IGenerateStyle) {
  const { filepath } = generatePath({
    path,
    filename: file,
    type,
    level,
  });

  if (ts) return ts.operation({ action: CREATE, path: filepath, data: "" });

  await writeFile({
    path: filepath,
  });
  logger.log(filepath, CREATE);
}
