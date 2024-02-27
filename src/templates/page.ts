import capitalize from "../utils/capitalize.js";

interface IPageTemplate {
  name: string;
}

export default function PageTemplate({ name }: IPageTemplate) {
  const capitalized = capitalize(name);

  return `
export default function ${capitalized}Page() {
    return (<p>${capitalized}Page</p>)
}`;
}
