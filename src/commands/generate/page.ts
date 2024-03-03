import { CREATE } from "../../actions.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import logger from "../../logger/index.js";
import { PageTemplate } from "../../templates/index.js";
import capitalize from "../../utils/capitalize.js";
import generatePath from "../../utils/path.js";
import generateStyleName from "../../utils/style.js";
import writeFile from "../../utils/writefile.js";
import generateStyle from "./style.js";

async function generatePage({ path, options }: IGenerateResource) {
  const { extension, style, mergeStyles = false, type, level } = options;
  const pageFile = `page.${extension}`;
  const { name, filepath: page } = generatePath({
    path,
    filename: pageFile,
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
    name: capitalize(name),
    style: styleName,
  });

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    await generateStyle({ path, file: styleName, type, level });
  }
}

export default generatePage;
