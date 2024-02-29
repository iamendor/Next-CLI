import ejs from "ejs";

interface IErrorTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>Error() {
  return <div><%= name %>Error</div>;
}
`;

const generateError = (data: IErrorTemplate) => ejs.render(template, data);
export default generateError;
