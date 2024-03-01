import ejs from "ejs";
import { TypeSafe } from "../interfaces/typesafe.interface.js";

interface ILayoutTemplate extends TypeSafe {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>Layout({ children }<%if(typesafe){%>:{ children: React.ReactNode }<% }%>) {
  return <div>{children}</div>;
}
`;

const generateLayout = (data: ILayoutTemplate) => ejs.render(template, data);
export default generateLayout;
