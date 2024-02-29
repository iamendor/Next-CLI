import { Command } from "commander";
import { InvalidPathException } from "../error/invalidpath.js";
import { CommandNotFoundException } from "../error/notfound.js";

export const listenTsx = (program: Command) => () =>
  (program.opts().extension = "tsx");

export const listenSCSS = (program: Command) => () =>
  (program.opts().style = "scss");

export const listenDynamic = (program: Command) => () =>
  (program.opts().type = "dynamic");

export const listenParralel = (program: Command) => () =>
  (program.opts().type = "parralel");

export const listenIntercepting = (program: Command) => () =>
  (program.opts().type = "intercepting");

export const validatePath = (path: string) => {
  const validation = /^(?!.*[!@#$%^&*(){}[\]<>?|`~])[a-zA-Z0-9_\/-]+$/;
  if (!validation.test(path)) {
    throw new InvalidPathException();
  }
  return path;
};

export const commandNotFound = (operands: string[]) => {
  throw new CommandNotFoundException(operands[0]);
};
