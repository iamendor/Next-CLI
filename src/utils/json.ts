import { readFileSync } from "fs";

export default function loadJson(path: string) {
  const file = readFileSync(path, "utf8");
  const json = JSON.parse(file);
  return json;
}
