import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { ErrorTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";

function generateError({ path, options }: IGenerateResource) {
  const { tsx, style, mergeStyles = false, type, level } = options;
  const errorFile = `error.${tsx ? "tsx" : "jsx"}`;
  const { filepath, name } = generatePath({
    path,
    filename: errorFile,
    type,
    level,
  });

  const genStyle = style && style != "no-style";
  const styleName = genStyle
    ? `./${mergeStyles ? name : "error"}.module.${style}`
    : null;

  const errorTemplate = ErrorTemplate({
    name,
    style: styleName,
  });

  writeFile({
    path: filepath,
    content: errorTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    generateStyle({ path, file: styleName, type, level });
  }
}

export default generateError;
