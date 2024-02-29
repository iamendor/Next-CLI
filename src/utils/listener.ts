import { Command } from "commander";

export const listenSCSS = (program: Command) => () =>
  (program.opts().style = "scss");
