import capitalize from "../utils/capitalize.js";

interface ILayoutTemplate {
  name: string;
}

export default function LayoutTemplate({ name }: ILayoutTemplate) {
  const capitalized = capitalize(name);

  return `
export default function ${capitalized}Layout({ children }) {
    return (<div>{children}</div>)
}`;
}
