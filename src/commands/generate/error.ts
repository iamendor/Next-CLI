import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { ErrorTemplate } from "../../templates/index.js";
import { IGenerateError } from "../../interfaces/commands/generate/error.interface.js";

function generateError({ path, options }: IGenerateError) {
  const { filepath, name } = generatePath({
    path,
    filename: `error.${options.tsx ? "tsx" : "jsx"}`,
  });

  const errorTemplate = ErrorTemplate({ name });

  writeFile({
    path: filepath,
    content: errorTemplate,
  });
  logger.log(filepath, CREATE);
}

export default generateError;
