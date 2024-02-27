import { Command } from "commander";

const program = new Command();

// Generate commands
const generate = program
  .command("generate")
  .description("Generate the templates");

program.parse();
