import { TypeSafe } from "../interfaces/typesafe.interface.js";
import ejs from "ejs";

interface IMiddlewareTemplate extends TypeSafe {
  name: string;
  matcher: string[];
}

const template = `<% if(typesafe){ -%>import type { NextRequest } from "next/server";<% } -%>

export function middleware(req<% if(typesafe){ %>: NextRequest<% } %>){
  console.log("Hello <%= name %> Middleware!");
}

export const config = {
  matcher: <%- JSON.stringify(matcher) %>
}
`;

const generateMiddleware = (data: IMiddlewareTemplate) =>
  ejs.render(template, data);
export default generateMiddleware;
