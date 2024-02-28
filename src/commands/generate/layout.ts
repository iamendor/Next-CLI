import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import { IGenerateLayout } from "../../interfaces/commands/generate/layout.interface.js";
import generatePath from "../../utils/path.js";
import { CREATE } from "../../actions.js";
import { LayoutTemplate } from "../../templates/index.js";

function generateLayout({ path, options }: IGenerateLayout) {
  const { filepath, name } = generatePath({
    path,
    filename: `layout.${options.tsx ? "tsx" : "jsx"}`,
  });

  const layoutTemplate = LayoutTemplate({ name });

  writeFile({
    path: filepath,
    content: layoutTemplate,
  });
  logger.log(filepath, CREATE);
}

export default generateLayout;
