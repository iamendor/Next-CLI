import ejs from "ejs";

interface ILayoutTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>Layout({ children }) {
  return <div>{children}</div>;
}
`;

const generateLayout = (data: ILayoutTemplate) => ejs.render(template, data);
export default generateLayout;
