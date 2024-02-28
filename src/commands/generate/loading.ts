import writeFile from "../../utils/writefile.js";
import { IGenerateLoading } from "../../interfaces/commands/generate/loading.interface.js";
import { LoadingTemplate } from "../../templates/index.js";
import logger from "../../logger/index.js";
import { CREATE } from "../../actions.js";
import generatePath from "../../utils/path.js";

function generateLoading({ path }: IGenerateLoading) {
  const { filepath, name } = generatePath({
    path,
    filename: "loading.jsx",
  });

  const loadingTemplate = LoadingTemplate({ name });

  writeFile({
    path: filepath,
    content: loadingTemplate,
  });
  logger.log(filepath, CREATE);
}

export default generateLoading;
