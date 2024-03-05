import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { ErrorTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";
import capitalize from "../../utils/capitalize.js";
import { Transaction } from "../../utils/transaction.js";

async function generateError({ path, options, ts }: IGenerateResource) {
  const transaction = ts || new Transaction({});

  const { style, mergeStyles = false, type, level, extension } = options;
  const errorFile = `error.${extension}`;
  const { filepath: error, name } = generatePath({
    path,
    filename: errorFile,
    type,
    level,
  });
  const { genStyle, styleName } = generateStyleName({
    style,
    mergeStyles,
    name,
    default: "error",
  });

  const errorTemplate = ErrorTemplate({
    name: capitalize(name),
    style: styleName,
    typesafe: extension == "tsx",
  });

  transaction.operation({ path: error, data: errorTemplate, action: CREATE });

  if (genStyle && !mergeStyles && styleName) {
    await generateStyle({
      path,
      file: styleName,
      type,
      level,
      ts: transaction,
    });
  }
  if (!ts) await transaction.execute();
}

export default generateError;
