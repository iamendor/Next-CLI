import writeFile from "../../utils/writefile.js";
import { IGenerateLoading } from "../../interfaces/commands/generate/loading.interface.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";
import generateStyle from "./style.js";

function generateLoading({ path, options }: IGenerateLoading) {
  const { tsx, style } = options;
  const loadingFile = `loading.${tsx ? "tsx" : "jsx"}`;
  const genStyle = style && style != "no-style";
  const styleName = genStyle ? `./loading.module.${style}` : null;

  const { filepath, name } = generatePath({
    path,
    filename: loadingFile,
  });

  const loadingTemplate = LoadingTemplate({ name, style: styleName });

  writeFile({
    path: filepath,
    content: loadingTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generateLoading;
