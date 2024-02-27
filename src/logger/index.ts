import chalk from "chalk";

class Logger {
  private STACK = "Next-CLI";
  log(message: string, stack?: string) {
    console.log(chalk.green(`[${stack || this.STACK}] ${message}`));
  }
  error(message: string, stacktrace?: Error) {
    console.log(chalk.red(`[ERROR] ${message}`));
    console.log(chalk.red(stacktrace));
  }
}

export default new Logger();
