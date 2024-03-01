import ejs from "ejs";
import { IRouteFunction } from "../interfaces/commands/generate/route.interface.js";
import { TypeSafe } from "../interfaces/typesafe.interface.js";

interface IRouteTemplate extends TypeSafe {
  name: string;
  functions: IRouteFunction[];
  singleHandler?: boolean;
}

const template = `<% if(singleHandler) { %>
export async function handler(req<%if(typesafe){%>: Request<% }%>){
  return Response.json({message: "Hello <%= name %>"})
}
<% }%>
<%  for(let i=0; i<functions.length; i++){%>
export async function <%= functions[i] %>(req<%if(typesafe){%>: Request<% }%>){
  return Response.json({ message: "<%= functions[i]%> <%= name %>" });
}
<% } %>
`;

const generateRoute = (data: IRouteTemplate) => ejs.render(template, data);
export default generateRoute;
