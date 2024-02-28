import ejs from "ejs";

interface ILoadingTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>
<% const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); const capitalized = capitalize(name); %>
export default function <%= capitalized %>Loading() {
  return <div>Loading <%= capitalized %>...</div>
}
`;

const generateLoading = (data: ILoadingTemplate) => ejs.render(template, data);
export default generateLoading;
