import writeFile from "../../utils/writefile.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";
import capitalize from "../../utils/capitalize.js";
import { Transaction } from "../../utils/transaction.js";

async function generateLoading({ path, options, ts }: IGenerateResource) {
  const transaction = ts || new Transaction({});

  const { extension, style, mergeStyles = false, type, level } = options;
  const loadingFile = `loading.${extension}`;
  const { filepath: loading, name } = generatePath({
    path,
    filename: loadingFile,
    type,
    level,
  });

  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "loading",
  });

  const loadingTemplate = LoadingTemplate({
    name: capitalize(name),
    style: styleName,
  });

  transaction.operation({
    action: CREATE,
    path: loading,
    data: loadingTemplate,
  });

  if (genStyle && !mergeStyles && styleName) {
    generateStyle({ path, file: styleName, type, level, ts: transaction });
  }

  if (!ts) await transaction.execute();
}

export default generateLoading;
