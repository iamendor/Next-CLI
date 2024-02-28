import ejs from "ejs";

interface IErrorTemplate {
  name: string;
}

const template = `<% const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); const capitalized = capitalize(name); %>
export default function <%= capitalized %>Error() {
  return <div><%= capitalized %>Error</div>
}
`;

const generateError = (data: IErrorTemplate) => ejs.render(template, data);
export default generateError;
