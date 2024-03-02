import { CREATE } from "../../actions.js";
import { IGenerateMiddleware } from "../../interfaces/commands/generate/middleware.interface.js";
import logger from "../../logger/index.js";
import { MiddlewareTemplate } from "../../templates/index.js";
import capitalize from "../../utils/capitalize.js";
import generatePath from "../../utils/path.js";
import writeFile from "../../utils/writefile.js";

function generateMiddleware({ path, options }: IGenerateMiddleware) {
  const { extension, matcher } = options;

  const routeFile = `middleware.${extension}`;
  const { name, filepath: middleware } = generatePath({
    path,
    filename: routeFile,
  });

  const middlewareTemplate = MiddlewareTemplate({
    name: capitalize(name),
    typesafe: extension == "ts",
    matcher,
  });

  writeFile({ path: middleware, content: middlewareTemplate }).then(() =>
    logger.log(middleware, CREATE),
  );
}

export default generateMiddleware;
