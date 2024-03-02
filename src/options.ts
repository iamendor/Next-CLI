import { Option } from "commander";
import { ROUTES } from "./routes.js";

export const MiddlewareMatcherOption = new Option(
  "-m, --matcher <matcher...>",
  "Specify matchers for the middleware",
).default([]);

export const GlobalMiddlewareOption = new Option(
  "-g, --global",
  "Make the middleware apply to all route",
);

export const ComponentExtOption = new Option(
  "-ext, --extension",
  "Specify component files' extension",
)
  .choices(["tsx", "jsx"])
  .default("jsx");

export const RouteExtOption = new Option(
  "-ext, --extension",
  "Specify route file extension",
)
  .choices(["ts", "js"])
  .default("js");

export const RouteHandleOption = new Option(
  "-ha, --handlers <handlers...>",
  "Specify what handlers to create",
)
  .choices(ROUTES)
  .default([]);

export const SingleHandlerOption = new Option(
  "-sh, --single-handler",
  "Generate a global handler",
);

export const GetHandlerOption = new Option(
  "--GET",
  "Generate handler with GET method",
);

export const PostHandlerOption = new Option(
  "--POST",
  "Generate handler with GET method",
);

export const TsxOption = new Option("--tsx", "Generate tsx files").default(
  false,
);

export const TsOption = new Option("--ts", "Generate ts files").default(false);

export const StyleOption = new Option("-s, --style <type>", "Specify styling")
  .choices(["css", "scss", "no-style"])
  .default("css");

export const NoStyleOption = new Option(
  "-ns, --no-style",
  "Don't create style files",
);

export const TypeOption = new Option(
  "-t, --type <type>",
  "Specify type of Next module (Dyanmic, Parralel, Intercepting, Default)",
)
  .choices(["default", "dynamic", "parralel", "intercepting"])
  .default("default");
export const RouteTypeOption = new Option(
  "-t, --type <type>",
  "Specify type of Next API route (Default, Dyanmic)",
)
  .choices(["default", "dynamic"])
  .default("default");

export const DynamicOption = new Option(
  "-d, --dynamic",
  "Create dynamic route",
);
export const ParralelOption = new Option(
  "-p, --parralel",
  "Create parralel route",
);

export const InterceptingOption = new Option(
  "-i, --intercepting",
  "Create intercepting route",
);

export const LevelOption = new Option(
  "-le, --level <level>",
  "Specify level of intercepting route",
)
  .choices(["0", "1", "2", "root"])
  .default("0");

export const ScssOption = new Option("--scss", "Use scss for styling");
