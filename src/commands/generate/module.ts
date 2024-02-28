import { IGenerateModule } from "../../interfaces/commands/generate/module.interface.js";
import generateLoading from "./loading.js";
import generateLayout from "./layout.js";
import generateError from "./error.js";
import generatePage from "./page.js";
import generateStyle from "./style.js";
import generatePath from "../../utils/path.js";
import { FlagOverlapException } from "../../error/invalidflags.js";
import generateNotFound from "./notfound.js";

function generateModule({ path, options }: IGenerateModule) {
  const { style, mergeStyles } = options;
  const genStyle = style && style != "no-style";
  if (!genStyle && mergeStyles) throw new FlagOverlapException();
  if (genStyle && mergeStyles) {
    const { name } = generatePath({ path, filename: `` });
    generateStyle({ path, file: `${name}.module.${style}` });
  }

  generatePage({ path, options });

  if (options.notFound) {
    generateNotFound({ path, options });
  }

  if (options.loading) {
    generateLoading({ path, options });
  }

  if (options.layout) {
    generateLayout({ path, options });
  }

  if (options.error) {
    generateError({ path, options });
  }
}

export default generateModule;
