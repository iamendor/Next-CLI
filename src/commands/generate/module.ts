import { IGenerateModule } from "../../interfaces/commands/generate/module.interface.js";
import generateLoading from "./loading.js";
import generateLayout from "./layout.js";
import generateError from "./error.js";
import generatePage from "./page.js";
import generateStyle from "./style.js";
import generatePath from "../../utils/path.js";
import { FlagOverlapException } from "../../error/invalidflags.js";
import generateNotFound from "./notfound.js";
import { CREATE } from "../../actions.js";
import logger from "../../logger/index.js";
import { Transaction } from "../../utils/transaction.js";

async function generateModule({ path, options }: IGenerateModule) {
  const ts = new Transaction({});
  const { style, mergeStyles, type, level } = options;
  const genStyle = style && style != "no-style";
  if (!genStyle && mergeStyles) throw new FlagOverlapException();
  if (genStyle && mergeStyles) {
    const { name } = generatePath({ path, filename: ``, level });
    await generateStyle({ path, file: `${name}.module.${style}`, type, ts });
  }

  await generatePage({ path, options, ts });

  if (options.notFound) {
    await generateNotFound({ path, options, ts });
  }

  if (options.loading) {
    await generateLoading({ path, options, ts });
  }

  if (options.layout) {
    await generateLayout({ path, options, ts });
  }

  if (options.error) {
    await generateError({ path, options, ts });
  }
  await ts.execute();
  if (ts.success) logger.log("Module generated successfuly!", CREATE);
}

export default generateModule;
