import ejs from "ejs";

interface ILayoutTemplate {
  name: string;
}

const template = `<% const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); const capitalized = capitalize(name); %>
export default function <%= capitalized %>Layout({ children }) {
  return <div>{children}</div>
}
`;

const generateLayout = (data: ILayoutTemplate) => ejs.render(template, data);
export default generateLayout;
