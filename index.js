const express = require("express");
const app = express();
const alunos = require("./api/alunos");

app.use(express.json({ extended: false }));

app.use("/api/alunos", alunos);

/**
 * Index Page
 */
app.get("/", (req, res) => {
  res.send(
    `<h1>API PAGE - of Prof. Acauan Ribeiro</h1> <br/>
    <h2>Lista de APIs válidas</h2> <br/>
    <ul>
      <li>'${window.location.href}/api/alunos'    |   return 'Json com lista de alunos de exemplo' </li>
    </ul>
    `
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
