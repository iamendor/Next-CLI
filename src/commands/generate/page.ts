import { join } from "path";
import { IGeneratePage } from "../../interfaces/commands/generate/page.interface.js";
import logger from "../../logger/index.js";
import PageTemplate from "../../templates/page.js";
import writeFile from "../../utils/writefile.js";
import LayoutTemplate from "../../templates/layout.js";

function generatePage({ path, options }: IGeneratePage) {
  const pathsplit = path.split("/");
  const name = pathsplit[pathsplit.length - 1];

  //Page Template
  const pageTemplate = PageTemplate({ name });
  const page = join(...pathsplit, "page.jsx");

  writeFile({
    path: page,
    content: pageTemplate,
    cb: (err) => {
      if (!err) return logger.log(`${page}`, "CREATE");
      logger.error(err.message);
    },
  });

  //Layout Template

  if (options.layout) {
    const layoutTemplate = LayoutTemplate({ name });
    const layout = join(...pathsplit, "layout.jsx");

    writeFile({
      path: layout,
      content: layoutTemplate,
      cb: (err) => {
        if (!err) return logger.log(`${layout}`, "CREATE");
        logger.error(err.message);
      },
    });
  }
}

export default generatePage;
