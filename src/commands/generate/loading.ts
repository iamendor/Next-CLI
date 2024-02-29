import writeFile from "../../utils/writefile.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";

function generateLoading({ path, options }: IGenerateResource) {
  const { tsx, style, mergeStyles = false, type, level } = options;
  const loadingFile = `loading.${tsx ? "tsx" : "jsx"}`;
  const { filepath, name } = generatePath({
    path,
    filename: loadingFile,
    type,
    level,
  });

  const genStyle = style && style != "no-style";
  const styleName = genStyle
    ? `./${mergeStyles ? name : "loading"}.module.${style}`
    : null;

  const loadingTemplate = LoadingTemplate({ name, style: styleName });

  writeFile({
    path: filepath,
    content: loadingTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    generateStyle({ path, file: styleName, type, level });
  }
}

export default generateLoading;
