import ejs from "ejs";

interface IPageTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>Page() {
  return <div><%= name %>Page</div>;
}
`;

const generatePage = (data: IPageTemplate) => ejs.render(template, data);
export default generatePage;
