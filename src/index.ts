import { Command } from "commander";
import generateModule from "./commands/generate/module.js";
import generateLayout from "./commands/generate/layout.js";
import generateLoading from "./commands/generate/loading.js";
import generateError from "./commands/generate/error.js";
import generatePage from "./commands/generate/page.js";
import {
  NoStyleOption,
  ScssOption,
  StyleOption,
  TsxOption,
} from "./options.js";
import { listenSCSS } from "./utils/listener.js";

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
  .addOption(ScssOption)
  .action((path, options) => generateModule({ path, options }));

module.on("option:scss", listenSCSS(module));

// COMMAND: generate page
const page = generate.command("page");
page
  .alias("p")
  .description("Create a page template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .addOption(ScssOption)
  .action((path, options) => generatePage({ path, options }));

page.on("option:scss", listenSCSS(page));

// COMMAND: generate layout
const layout = generate.command("layout");
layout
  .alias("la")
  .description("Create a layout template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .addOption(ScssOption)
  .action((path, options) => generateLayout({ path, options }));

layout.on("option:scss", listenSCSS(layout));

// COMMAND: generate loading
const loading = generate.command("loading");
loading
  .alias("lo")
  .description("Create a loading template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .addOption(ScssOption)
  .action((path, options) => generateLoading({ path, options }));

loading.on("option:scss", listenSCSS(loading));

// COMMAND: generate error
const error = generate.command("error");
error
  .alias("err")
  .description("Create an error template")
  .argument("<path>")
  .addOption(TsxOption)
  .addOption(StyleOption)
  .addOption(NoStyleOption)
  .addOption(ScssOption)
  .action((path, options) => generateError({ path, options }));

error.on("option:scss", listenSCSS(error));

program.parse();
