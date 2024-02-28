import { CREATE } from "../../actions.js";
import { IGenerateStyle } from "../../interfaces/commands/generate/style.interface.js";
import logger from "../../logger/index.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";

export default async function generateStyle({ path, file }: IGenerateStyle) {
  const { filepath } = generatePath({
    path,
    filename: file,
  });
  await writeFile({
    path: filepath,
  });
  logger.log(filepath, CREATE);
}
