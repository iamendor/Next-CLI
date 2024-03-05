import { join } from "path";
import { IGenerateComponent } from "../../interfaces/commands/generate/component.interface.js";
import { Transaction } from "../../utils/transaction.js";
import capitalize from "../../utils/capitalize.js";
import { ComponentTemplate } from "../../templates/index.js";
import { CREATE } from "../../actions.js";
import generateStyle from "./style.js";

async function generateComponent({ path, options }: IGenerateComponent) {
  const transaction = new Transaction({});
  const { extension, style } = options;

  const split = path.split("/").filter((i) => i != ".");
  const name = capitalize(split.pop() as string);

  const component = join(...split, `${name}.${extension}`);
  const styleName = style ? `./${name}.${style}` : null;

  const template = ComponentTemplate({
    name,
    style: styleName,
  });

  transaction.operation({ path: component, data: template, action: CREATE });

  if (style) {
    await generateStyle({
      path: join(...split),
      file: styleName as string,
      type: "default",
      ts: transaction,
    });
  }

  await transaction.execute();
}

export default generateComponent;
