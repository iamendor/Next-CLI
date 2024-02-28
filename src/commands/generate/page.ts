import { join } from "path";
import { IGeneratePage } from "../../interfaces/commands/generate/page.interface.js";
import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";

import {
  PageTemplate,
  LayoutTemplate,
  LoadingTemplate,
} from "../../templates/index.js";
import { CREATE } from "../../actions.js";

async function generatePage({ path, options }: IGeneratePage) {
  console.log(options);
  const pathsplit = path.split("/");
  const name = pathsplit[pathsplit.length - 1];

  //Page Template
  const pageTemplate = PageTemplate({ name });
  const page = join(...pathsplit, "page.jsx");

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);

  // Loading Template
  if (!options.loading) {
    const loadingTemplate = LoadingTemplate({ name });
    const loading = join(...pathsplit, "loading.jsx");

    await writeFile({
      path: loading,
      content: loadingTemplate,
    });

    logger.log(loading, CREATE);
  }

  //Layout Template

  if (options.layout) {
    const layoutTemplate = LayoutTemplate({ name });
    const layout = join(...pathsplit, "layout.jsx");

    await writeFile({
      path: layout,
      content: layoutTemplate,
    });
    logger.log(layout, CREATE);
  }
}

export default generatePage;
