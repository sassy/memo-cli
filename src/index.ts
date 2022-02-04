import { promises as fs } from "fs";

const command: string = process.argv[2];
const name: string = process.argv[3] || "default";

async function generateTemplateFIle() {
    const date = new Date();
    const filename =
      "" +
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2) +
      "-" +
      name +
      ".md";
    const template = await fs.readFile("src/template.md", "utf-8");
    fs.writeFile(filename, template);
}

switch (command) {
  case "new":
    generateTemplateFIle();
  default:
    console.log(command);
}

