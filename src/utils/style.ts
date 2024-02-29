import { IGenerateStyleName } from "../interfaces/utils/style.interface.js";

export default function generateStyleName({
  style,
  mergeStyles,
  name,
  default: def,
}: IGenerateStyleName) {
  const genStyle = style && style != "no-style";
  const styleName = genStyle
    ? `./${mergeStyles ? name : def}.module.${style}`
    : null;

  return { genStyle, styleName };
}
