import { Command } from "commander";
import generatePage from "./commands/generate/page.js";
import generateLayout from "./commands/generate/layout.js";

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
  .action((path, options) => generatePage({ path, options }));

// COMMAND: generate layout
generate
  .command("layout")
  .description("Create a layout template")
  .argument("<path>")
  .action((path) => generateLayout({ path }));

program.parse();
