import { Command } from "commander";
import generatePage from "./commands/generate/page.js";
import generateLayout from "./commands/generate/layout.js";
import generateLoading from "./commands/generate/loading.js";
import generateError from "./commands/generate/error.js";

const program = new Command();

// COMMAND: generate
const generate = program
  .command("generate")
  .description("Generate the templates");

// COMMAND: generate page
generate
  .command("page")
  .description("Create a page template")
  .argument("<path>")
  .option("-l, --layout")
  .option("-lo, --loading", "", true)
  .option("-nl, --no-loading")
  .option("-e, --error", "", true)
  .option("-ne, --no-error")
  .action((path, options) => generatePage({ path, options }));

// COMMAND: generate layout
generate
  .command("layout")
  .description("Create a layout template")
  .argument("<path>")
  .action((path) => generateLayout({ path }));

// COMMAND: generate loading
generate
  .command("loading")
  .description("Create a loading template")
  .argument("<path>")
  .action((path) => generateLoading({ path }));

// COMMAND: generate error
generate
  .command("error")
  .description("Create an error template")
  .argument("<path>")
  .action((path) => generateError({ path }));

program.parse();
