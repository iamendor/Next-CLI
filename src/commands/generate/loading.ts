import writeFile from "../../utils/writefile.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";

function generateLoading({ path, options }: IGenerateResource) {
  const { tsx, style, mergeStyles = false } = options;
  const loadingFile = `loading.${tsx ? "tsx" : "jsx"}`;
  const { filepath, name } = generatePath({
    path,
    filename: loadingFile,
  });

  const genStyle = style && style != "no-style";
  const styleName = genStyle
    ? mergeStyles
      ? `./${name}.module.${style}`
      : `./loading.module.${style}`
    : null;

  const loadingTemplate = LoadingTemplate({ name, style: styleName });

  writeFile({
    path: filepath,
    content: loadingTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generateLoading;
