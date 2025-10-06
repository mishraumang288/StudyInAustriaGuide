import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

const basePath = "/StudyInAustriaGuide";

const outDir = path.join(__dirname, "out");

app.use(basePath, express.static(outDir));

app.get("/", (req, res) => {
  res.redirect(basePath + "/");
});

app.use(basePath, (req, res) => {
  res.sendFile(path.join(outDir, "index.html"));
});


app.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}${basePath}/`);
});
