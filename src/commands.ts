import { Command } from "commander";
import generateModule from "./commands/generate/module.js";
import {
  RouteHandleOption,
  SingleHandlerOption,
  RouteTypeOption,
  DynamicOption,
  GetHandlerOption,
  PostHandlerOption,
  MiddlewareMatcherOption,
  GlobalMiddlewareOption,
  StyleOption,
  NoStyleOption,
  ScssOption,
  TypeOption,
  ParralelOption,
  InterceptingOption,
  LevelOption,
  ComponentExtOption,
  TsxOption,
  TsOption,
  RouteExtOption,
} from "./options.js";
import {
  listenDynamic,
  listenGetHandler,
  listenPostHandler,
  listenMiddlewareGlobal,
  listenSCSS,
  listenParralel,
  listenIntercepting,
  listenTsx,
  listenTs,
  validatePath,
} from "./utils/listener.js";
import generatePage from "./commands/generate/page.js";
import generateLayout from "./commands/generate/layout.js";
import generateLoading from "./commands/generate/loading.js";
import generateError from "./commands/generate/error.js";
import generateRoute from "./commands/generate/route.js";
import generateMiddleware from "./commands/generate/middleware.js";
import { api, components } from "./utils/groups.js";
import { IConfiguration } from "./interfaces/configuration.interface.js";
import initConfig from "./commands/init/config.js";
import generateNotFound from "./commands/generate/notfound.js";

export default function init(root: Command, configuration?: IConfiguration) {
  // COMMAND: generate
  const generate = root
    .command("generate")
    .alias("g")
    .description("Generate the templates");
  // COMMAND: init
  const init = root
    .command("init")
    .alias("i")
    .description("Initialize Next CLI");

  initConfiguration(init);
  initGenerators(generate, configuration);
}

function initConfiguration(init: Command) {
  const config = init.command("config");

  config
    .alias("c")
    .description("Create default configuration file")
    .action(() => initConfig(import.meta.dirname));
}

function initGenerators(generate: Command, configuration?: IConfiguration) {
  // COMMAND: generate module
  const module = generate.command("module");
  module
    .alias("m")
    .description("Create a module template")
    .option(
      "-l, --layout",
      "Add layout file",
      configuration?.generate?.module?.layout || false,
    )
    .option(
      "-lo, --loading",
      "Add loading file",
      configuration?.generate?.module?.loading == false ? false : true,
    )
    .option("-nlo, --no-loading")
    .option(
      "-e, --error",
      "Add error file",
      configuration?.generate?.module?.error == false ? false : true,
    )
    .option("-ne, --no-error")
    .option(
      "-nf, --not-found",
      "Add not found file",
      configuration?.generate?.module?.notFound == false ? false : true,
    )
    .option("-nnf, --no-not-found")
    .option(
      "-ms, --merge-styles",
      "Merge style files into one",
      configuration?.generate?.module?.mergeStyles || false,
    )
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

  // COMMAND: generate not-found
  const notfound = generate.command("notfound");
  notfound
    .alias("nf")
    .description("Create a not found template")
    .action((path, options) => generateNotFound({ path, options }));

  // COMMAND: generate error
  const error = generate.command("error");
  error
    .alias("err")
    .description("Create an error template")
    .action((path, options) => {
      generateError({ path, options });
    });

  // COMMAND: generate route
  const route = generate.command("route");
  route
    .alias("ro")
    .description("Create an API route")
    .addOption(
      RouteHandleOption.default(configuration?.generate?.route?.handlers),
    )
    .addOption(
      SingleHandlerOption.default(
        configuration?.generate?.route?.singleHandler,
      ),
    )
    .addOption(RouteTypeOption)
    .addOption(DynamicOption)
    .addOption(GetHandlerOption)
    .addOption(PostHandlerOption)
    .action((path, options) => generateRoute({ path, options }));
  route.on("option:dynamic", listenDynamic(route));
  route.on("option:GET", listenGetHandler(route));
  route.on("option:POST", listenPostHandler(route));

  // COMMAND: generate middleware
  const middleware = generate.command("middleware");
  middleware
    .alias("mw")
    .description("Create a middleware")
    .addOption(MiddlewareMatcherOption)
    .addOption(GlobalMiddlewareOption)
    .action((path, options) => generateMiddleware({ path, options }));

  middleware.on("option:global", listenMiddlewareGlobal(middleware));

  // Map options for generating components
  generate.commands
    .filter((command) => components.includes(command.name()))
    .map((command) => {
      command
        .addOption(StyleOption.default(configuration?.style))
        .addOption(NoStyleOption)
        .addOption(ScssOption)
        .addOption(TypeOption)
        .addOption(DynamicOption)
        .addOption(ParralelOption)
        .addOption(InterceptingOption)
        .addOption(LevelOption)
        .addOption(
          ComponentExtOption.default(
            configuration?.extension == "ts" ? "tsx" : "jsx",
          ),
        )
        .addOption(TsxOption);

      command.on("option:scss", listenSCSS(command));
      command.on("option:dynamic", listenDynamic(command));
      command.on("option:parralel", listenParralel(command));
      command.on("option:intercepting", listenIntercepting(command));
      command.on("option:tsx", listenTsx(command));
    });

  // Map options for generating route and middleware
  generate.commands
    .filter((command) => api.includes(command.name()))
    .map((command) => {
      command
        .addOption(TsOption)
        .addOption(
          RouteExtOption.default(
            configuration?.extension == "ts" ? "ts" : "js",
          ),
        );

      route.on("option:ts", listenTs(command));
    });

  generate.commands.map((command) => {
    command.argument(
      "<path>",
      "Path to the files you want to create",
      validatePath,
    );
  });
}
