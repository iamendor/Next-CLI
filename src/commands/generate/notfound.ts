import writeFile from "../../utils/writefile.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";
import capitalize from "../../utils/capitalize.js";

async function generateNotFound({ path, options }: IGenerateResource) {
  const { extension, style, mergeStyles = false, type, level } = options;
  const loadingFile = `not-found.${extension}`;
  const { filepath, name } = generatePath({
    path,
    filename: loadingFile,
    type,
    level,
  });

  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "not-found",
  });

  const loadingTemplate = LoadingTemplate({
    name: capitalize(name),
    style: styleName,
  });

  await writeFile({
    path: filepath,
    content: loadingTemplate,
  });
  logger.log(filepath, CREATE);

  if (genStyle && !mergeStyles && styleName) {
    await generateStyle({ path, file: styleName, type, level });
  }
}

export default generateNotFound;
