import { join } from "path";
import logger from "../../logger/index.js";
import writeFile from "../../utils/writefile.js";
import LayoutTemplate from "../../templates/layout.js";
import { IGenerateLayout } from "../../interfaces/commands/generate/layout.interface.js";

function generateLayout({ path }: IGenerateLayout) {
  const pathsplit = path.split("/");
  const name = pathsplit[pathsplit.length - 1];
  //Layout Template

  const layoutTemplate = LayoutTemplate({ name });
  const layout = join(...pathsplit, "layout.jsx");

  writeFile({
    path: layout,
    content: layoutTemplate,
  });
}

export default generateLayout;
