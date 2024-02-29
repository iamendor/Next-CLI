import { Command } from "commander";
import generateModule from "./commands/generate/module.js";
import generateLayout from "./commands/generate/layout.js";
import generateLoading from "./commands/generate/loading.js";
import generateError from "./commands/generate/error.js";
import generatePage from "./commands/generate/page.js";
import {
  DynamicOption,
  NoStyleOption,
  ParralelOption,
  ScssOption,
  StyleOption,
  TsxOption,
  TypeOption,
} from "./options.js";
import {
  commandNotFound,
  listenDynamic,
  listenParralel,
  listenSCSS,
  validatePath,
} from "./utils/listener.js";
import logger from "./logger/index.js";
import { components } from "./groups.js";

const program = new Command();

// COMMAND: generate
const generate = program
  .command("generate")
  .description("Generate the templates");

// COMMAND: generate module
const module = generate.command("module");
module
  .alias("m")
  .description("Create a module template")
  .option("-l, --layout")
  .option("-lo, --loading", "", true)
  .option("-nlo, --no-loading")
  .option("-e, --error", "", true)
  .option("-ne, --no-error")
  .option("-nf, --not-found", "", true)
  .option("-nnf, --no-not-found")
  .option("-ms, --merge-styles", "Merge style files into one")
  .action((path, options) => {
    generateModule({ path, options });
  });

// COMMAND: generate page
const page = generate.command("page");
page
  .alias("p")
  .description("Create a page template")
  .action((path, options) => {
    generatePage({ path, options });
  });

// COMMAND: generate layout
const layout = generate.command("layout");
layout
  .alias("la")
  .description("Create a layout template")
  .action((path, options) => {
    generateLayout({ path, options });
  });

// COMMAND: generate loading
const loading = generate.command("loading");
loading
  .alias("lo")
  .description("Create a loading template")
  .action((path, options) => {
    generateLoading({ path, options });
  });

// COMMAND: generate error
const error = generate.command("error");
error
  .alias("err")
  .description("Create an error template")
  .action((path, options) => {
    generateError({ path, options });
  });

// Map options for generating components
generate.commands
  .filter((command) => components.includes(command.name()))
  .map((command) => {
    command
      .addOption(StyleOption)
      .addOption(NoStyleOption)
      .addOption(ScssOption)
      .addOption(TypeOption)
      .addOption(DynamicOption)
      .addOption(ParralelOption);

    command.on("option:scss", listenSCSS(command));
    command.on("option:dynamic", listenDynamic(command));
    command.on("option:parralel", listenParralel(command));
  });

generate.commands.map((command) => {
  command.addOption(TsxOption);
  command.argument(
    "<path>",
    "Path to the files you want to create",
    validatePath,
  );
});

program.on("command:*", commandNotFound);
program.configureOutput({
  outputError: (str) => logger.error(str.replace("error: ", "")),
});
program.parse();
