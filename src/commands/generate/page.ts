import { join } from "path";
import { IGeneratePage } from "../../interfaces/commands/generate/page.interface.js";
import logger from "../../logger/index.js";
import PageTemplate from "../../templates/page.js";
import writeFile from "../../utils/writefile.js";
import LayoutTemplate from "../../templates/layout.js";

async function generatePage({ path, options }: IGeneratePage) {
  const pathsplit = path.split("/");
  const name = pathsplit[pathsplit.length - 1];

  //Page Template
  const pageTemplate = PageTemplate({ name });
  const page = join(...pathsplit, "page.jsx");

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, "CREATE");

  //Layout Template

  if (options.layout) {
    const layoutTemplate = LayoutTemplate({ name });
    const layout = join(...pathsplit, "layout.jsx");

    await writeFile({
      path: layout,
      content: layoutTemplate,
    });
    logger.log(layout, "CREATE");
  }
}

export default generatePage;
