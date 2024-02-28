import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import { IGenerateLayout } from "../../interfaces/commands/generate/layout.interface.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { LayoutTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";

function generateLayout({ path, options }: IGenerateLayout) {
  const { tsx, style } = options;
  const layoutFile = `layout.${tsx ? "tsx" : "jsx"}`;
  const genStyle = style && style != "no-style";
  const styleName = genStyle ? `./layout.module.${style}` : null;

  const { filepath, name } = generatePath({
    path,
    filename: layoutFile,
  });

  const layoutTemplate = LayoutTemplate({ name, style: styleName });

  writeFile({
    path: filepath,
    content: layoutTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generateLayout;
