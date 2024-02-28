import { Command } from "commander";
import generateModule from "./commands/generate/module.js";
import generateLayout from "./commands/generate/layout.js";
import generateLoading from "./commands/generate/loading.js";
import generateError from "./commands/generate/error.js";
import generatePage from "./commands/generate/page.js";
import { NoStyleOption, StyleOption, TsxOption } from "./options.js";

const program = new Command();

// COMMAND: generate
const generate = program
  .command("generate")
  .description("Generate the templates");

// COMMAND: generate module
generate
  .command("module")
  .alias("m")
  .description("Create a module template")
  .argument("<path>")
  .option("-l, --layout")
  .option("-lo, --loading", "", true)
  .option("-nlo, --no-loading")
  .option("-e, --error", "", true)
  .option("-ne, --no-error")
  .option("-nf, --not-found", "", true)
  .option("-nnf, --no-not-found")
  .option("-ms, --merge-styles", "Merge style files into one")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .action((path, options) => generateModule({ path, options }));

// COMMAND: generate page
generate
  .command("page")
  .alias("p")
  .description("Create a page template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .action((path, options) => generatePage({ path, options }));

// COMMAND: generate layout
generate
  .command("layout")
  .alias("la")
  .description("Create a layout template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .action((path, options) => generateLayout({ path, options }));

// COMMAND: generate loading
generate
  .command("loading")
  .alias("lo")
  .description("Create a loading template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .action((path, options) => generateLoading({ path, options }));

// COMMAND: generate error
generate
  .command("error")
  .alias("err")
  .description("Create an error template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .action((path, options) => generateError({ path, options }));

program.parse();
