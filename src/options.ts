import { Option } from "commander";

export const TsxOption = new Option("--tsx", "Generate tsx files").default(
  false
);

export const StyleOption = new Option("-s, --style <type>", "Specify styling")
  .choices(["css", "scss", "no-style"])
  .default("css");

export const NoStyleOption = new Option(
  "-ns, --no-style",
  "Don't create style files"
);
