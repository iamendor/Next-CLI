import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { LayoutTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";
import capitalize from "../../utils/capitalize.js";

async function generateLayout({ path, options }: IGenerateResource) {
  const { extension, style, mergeStyles = false, type, level } = options;
  const layoutFile = `layout.${extension}`;
  const { filepath, name } = generatePath({
    path,
    filename: layoutFile,
    type,
    level,
  });

  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "layout",
  });

  const layoutTemplate = LayoutTemplate({
    name: capitalize(name),
    style: styleName,
    typesafe: extension == "tsx",
  });

  await writeFile({
    path: filepath,
    content: layoutTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    await generateStyle({ path, file: styleName, type, level });
  }
}

export default generateLayout;
