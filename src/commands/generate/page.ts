import { CREATE } from "../../actions.js";
import { IGenerateResource } from "../../interfaces/commands/generate/resource.interface.js";
import logger from "../../logger/index.js";
import { PageTemplate } from "../../templates/index.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";
import generateStyle from "./style.js";

async function generatePage({ path, options }: IGenerateResource) {
  const { tsx, style } = options;
  const genStyle = style && style != "no-style";
  const styleName = genStyle ? `./page.module.${style}` : null;

  const { name, filepath: page } = generatePath({
    path,
    filename: `page.${tsx ? "tsx" : "jsx"}`,
  });

  //Page Template
  const pageTemplate = PageTemplate({
    name,
    style: styleName,
  });

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);

  if (genStyle) {
    generateStyle({ path, file: styleName || "" });
  }
}

export default generatePage;
