import { Option } from "commander";

export const ComponentExtOption = new Option(
  "-ext, --extension",
  "Specify component files' extension",
)
  .choices(["tsx", "jsx"])
  .default("jsx");

export const TsxOption = new Option("--tsx", "Generate tsx files").default(
  false,
);

export const StyleOption = new Option("-s, --style <type>", "Specify styling")
  .choices(["css", "scss", "no-style"])
  .default("css");

export const NoStyleOption = new Option(
  "-ns, --no-style",
  "Don't create style files",
);

export const TypeOption = new Option(
  "-t, --type",
  "Specify type of Next module (Dyanmic, Parralel)",
)
  .choices(["default", "dynamic", "parralel", "intercepting"])
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
