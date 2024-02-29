import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { ErrorTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";

function generateError({ path, options }: IGenerateResource) {
  const { style, mergeStyles = false, type, level, extension } = options;
  const errorFile = `error.${extension}`;
  const { filepath, name } = generatePath({
    path,
    filename: errorFile,
    type,
    level,
  });
  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "error",
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

  if (genStyle && !mergeStyles && styleName) {
    generateStyle({ path, file: styleName, type, level });
  }
}

export default generateError;
