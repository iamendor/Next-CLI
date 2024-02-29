import { CREATE } from "../../actions.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import logger from "../../logger/index.js";
import { PageTemplate } from "../../templates/index.js";
import generatePath from "../../utils/path.js";
import generateStyleName from "../../utils/style.js";
import writeFile from "../../utils/writefile.js";
import generateStyle from "./style.js";

function generatePage({ path, options }: IGenerateResource) {
  const { tsx, style, mergeStyles = false, type, level } = options;
  const { name, filepath: page } = generatePath({
    path,
    filename: `page.${tsx ? "tsx" : "jsx"}`,
    type,
    level,
  });

  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "page",
  });

  //Page Template
  const pageTemplate = PageTemplate({
    name,
    style: styleName,
  });

  writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    generateStyle({ path, file: styleName, type, level });
  }
}

export default generatePage;
