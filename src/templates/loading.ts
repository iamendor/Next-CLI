import ejs from "ejs";

interface ILoadingTemplate {
  name: string;
  style: string | null;
}

const template = `<% if(style){ %>import styles from "<%= style %>";<% } %>

export default function <%= name %>Loading() {
  return <div>Loading <%= name %>...</div>;
}
`;

const generateLoading = (data: ILoadingTemplate) => ejs.render(template, data);
export default generateLoading;
