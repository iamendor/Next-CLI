import ejs from "ejs";

interface IPageTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>
<% const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); const capitalized = capitalize(name); %>
export default function <%= capitalized %>Page() {
  return <div><%= capitalized %>Page</div>;
}
`;

const generatePage = (data: IPageTemplate) => ejs.render(template, data);
export default generatePage;
