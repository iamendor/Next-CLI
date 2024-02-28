import { Option } from "commander";

export const TsxOption = new Option("--tsx", "Generate tsx files").default(
  false
);

export const StyleOption = new Option("-s, --style <type>", "Specify styling")
  .choices(["css", "no-style"])
  .default("css");
