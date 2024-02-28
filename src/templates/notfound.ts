import ejs from "ejs";

interface INotFoundTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>
<% const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); const capitalized = capitalize(name); %>
export default function <%= capitalized %>NotFound() {
  return <div>Loading <%= capitalized %>...</div>
}
`;

const generateLoading = (data: INotFoundTemplate) => ejs.render(template, data);
export default generateLoading;
