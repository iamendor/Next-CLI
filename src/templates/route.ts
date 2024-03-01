import ejs from "ejs";
import { IRouteFunction } from "../interfaces/commands/generate/route.interface.js";

interface IRouteTemplate {
  name: string;
  functions: IRouteFunction[];
  singleHandler?: boolean;
}

const template = `<% if(singleHandler) { %>
export async function handler(req){
  return Response.json({message: "Hello <%= name %>"})
}
<% }%>
<%  for(let i=0; i<functions.length; i++){%>
export async function <%= functions[i] %>(req){
  return Response.json({ message: "<%= functions[i]%> <%= name %>" });
}
<% } %>
`;

const generateRoute = (data: IRouteTemplate) => ejs.render(template, data);
export default generateRoute;
