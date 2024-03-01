import ejs from "ejs";

interface INotFoundTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>NotFound() {
  return <div><%= name %> not found...</div>;
}
`;

const generateLoading = (data: INotFoundTemplate) => ejs.render(template, data);
export default generateLoading;
