import ejs from "ejs";
import { TypeSafe } from "../interfaces/typesafe.interface.js";

interface IComponentTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>() {
  return <div><%= name %>Component</div>;
}
`;

const generateComponent = (data: IComponentTemplate) =>
  ejs.render(template, data);
export default generateComponent;
