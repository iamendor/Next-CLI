import { CREATE } from "../../actions.js";
import { IGenerateStyle } from "../../interfaces/commands/generate/style.interface.js";
import logger from "../../logger/index.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";

export default async function generateStyle({
  path,
  file,
  type,
}: IGenerateStyle) {
  const { filepath } = generatePath({
    path,
    filename: file,
    type,
  });
  await writeFile({
    path: filepath,
  });
  logger.log(filepath, CREATE);
}
