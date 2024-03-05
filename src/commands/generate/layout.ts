import logger from "../../logger/index.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { LayoutTemplate } from "../../templates/index.js";
import generateStyle from "./style.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import generateStyleName from "../../utils/style.js";
import capitalize from "../../utils/capitalize.js";
import { Transaction } from "../../utils/transaction.js";

async function generateLayout({ path, options, ts }: IGenerateResource) {
  const transaction = ts || new Transaction({});

  const { extension, style, mergeStyles = false, type, level } = options;
  const layoutFile = `layout.${extension}`;
  const { filepath: layout, name } = generatePath({
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

  transaction.operation({ action: CREATE, path: layout, data: layoutTemplate });

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

export default generateLayout;
