import { IGenerateRoute } from "../../interfaces/commands/generate/route.interface.js";
import generatePath from "../../utils/path.js";
import capitalize from "../../utils/capitalize.js";
import writeFile from "../../utils/writefile.js";
import logger from "../../logger/index.js";
import { RouteTemplate } from "../../templates/index.js";
import { CREATE } from "../../actions.js";

async function generateRoute({ path, options }: IGenerateRoute) {
  const { extension, handlers, singleHandler = false, type } = options;

  const routeFile = `route.${extension}`;
  const { name, filepath: route } = generatePath({
    path,
    filename: routeFile,
    type,
  });

  // Route Template
  const routeTemplate = RouteTemplate({
    name: capitalize(name),
    functions: handlers,
    singleHandler: singleHandler || handlers.length == 0,
    typesafe: extension == "ts",
  });

  await writeFile({ path: route, content: routeTemplate });
  logger.log(route, CREATE);
}
export default generateRoute;
