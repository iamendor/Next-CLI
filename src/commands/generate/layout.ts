import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { LayoutTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";

function generateLayout({ path, options }: IGenerateResource) {
  const { tsx, style, mergeStyles = false } = options;
  const layoutFile = `layout.${tsx ? "tsx" : "jsx"}`;
  const { filepath, name } = generatePath({
    path,
    filename: layoutFile,
  });

  const genStyle = style && style != "no-style";
  const styleName = genStyle
    ? mergeStyles
      ? `./${name}.module.${style}`
      : `./layout.module.${style}`
    : null;

  const layoutTemplate = LayoutTemplate({ name, style: styleName });

  writeFile({
    path: filepath,
    content: layoutTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generateLayout;
