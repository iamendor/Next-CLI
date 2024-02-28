import { IGenerateModule } from "../../interfaces/commands/generate/module.interface.js";
import generateLoading from "./loading.js";
import generateLayout from "./layout.js";
import generateError from "./error.js";
import generatePage from "./page.js";

function generateModule({ path, options }: IGenerateModule) {
  generatePage({ path, options });

  if (options.loading) {
    generateLoading({ path, options });
  }

  if (options.layout) {
    generateLayout({ path, options });
  }

  if (options.error) {
    generateError({ path, options });
  }
}

export default generateModule;
