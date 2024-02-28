import { IGeneratePage } from "../../interfaces/commands/generate/page.interface.js";
import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";

import {
  PageTemplate,
  LayoutTemplate,
  LoadingTemplate,
  ErrorTemplate,
} from "../../templates/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";

async function generatePage({ path, options }: IGeneratePage) {
  const { name, filepath: page } = generatePath({ path, filename: "page.jsx" });
  console.log(name);

  //Page Template
  const pageTemplate = PageTemplate({ name });

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);

  // Loading Template
  if (options.loading) {
    const { name, filepath: loading } = generatePath({
      path,
      filename: "loading.jsx",
    });
    const loadingTemplate = LoadingTemplate({ name });

    await writeFile({
      path: loading,
      content: loadingTemplate,
    });

    logger.log(loading, CREATE);
  }

  //Layout Template

  if (options.layout) {
    const { name, filepath: layout } = generatePath({
      path,
      filename: "layout.jsx",
    });
    const layoutTemplate = LayoutTemplate({ name });

    await writeFile({
      path: layout,
      content: layoutTemplate,
    });
    logger.log(layout, CREATE);
  }

  if (options.error) {
    const { name, filepath: error } = generatePath({
      path,
      filename: "error.jsx",
    });
    const errorTemplate = ErrorTemplate({ name });
    await writeFile({ path: error, content: errorTemplate });
    logger.log(error, CREATE);
  }
}

export default generatePage;
