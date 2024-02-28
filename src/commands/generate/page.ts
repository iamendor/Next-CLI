import { CREATE } from "../../actions.js";
import { IGeneratePage } from "../../interfaces/commands/generate/page.interface.js";
import logger from "../../logger/index.js";
import { PageTemplate } from "../../templates/index.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";

async function generatePage({ path, options }: IGeneratePage) {
  const { name, filepath: page } = generatePath({
    path,
    filename: `page.${options.tsx ? "tsx" : "jsx"}`,
  });

  //Page Template
  const pageTemplate = PageTemplate({ name });

  await writeFile({
    path: page,
    content: pageTemplate,
  });
  logger.log(page, CREATE);
}

export default generatePage;
