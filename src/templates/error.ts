import ejs from "ejs";
import { TypeSafe } from "../interfaces/typesafe.interface.js";

interface IErrorTemplate extends TypeSafe {
  name: string;
  style: string | null;
}

const template = `"use client";
<% if(style){ %>import styles from "<%= style %>";<% } %>
import { useEffect } from "react";

export default function <%= name %>Error({ error, reset }<%if(typesafe) {%>:{ error: Error, reset: () => void} <%} %> ) {
  useEffect(() => {
    console.error(error)
  })

  return <div><%= name %>Error</div>;
}
`;

const generateError = (data: IErrorTemplate) => ejs.render(template, data);
export default generateError;
