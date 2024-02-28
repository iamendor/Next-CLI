import writeFile from "../../utils/writefile.js";
import { IGenerateLoading } from "../../interfaces/commands/generate/loading.interface.js";
import { join } from "path";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";

function generateLoading({ path }: IGenerateLoading) {
  const pathsplit = path.split("/");
  const name = pathsplit[pathsplit.length - 1];
  //Layout Template

  const layoutTemplate = LoadingTemplate({ name });
  const layout = join(...pathsplit, "loading.jsx");

  writeFile({
    path: layout,
    content: layoutTemplate,
  });
  logger.log(layout, CREATE);
}

export default generateLoading;
