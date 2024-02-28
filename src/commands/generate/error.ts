import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { ErrorTemplate } from "../../templates/index.js";
import { IGenerateError } from "../../interfaces/commands/generate/error.interface.js";
import generateStyle from "./style.js";

function generateError({ path, options }: IGenerateError) {
  const { tsx, style } = options;
  const errorFile = `error.${tsx ? "tsx" : "jsx"}`;
  const genStyle = style && style != "no-style";
  const styleName = genStyle ? `./error.module.${style}` : null;

  const { filepath, name } = generatePath({
    path,
    filename: errorFile,
  });

  const errorTemplate = ErrorTemplate({
    name,
    style: styleName,
  });

  writeFile({
    path: filepath,
    content: errorTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generateError;
