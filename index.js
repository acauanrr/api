const express = require("express");
const app = express();
const alunos = require("./api/alunos");

app.use(express.json({ extended: false }));

/**
 * API Endpoints
 */
app.use("/alunos", alunos);

/**
 * Index Page
 */
app.get("/", (req, res) => {
  const baseUrl = `${req.protocol}://${req.headers.host}`;
  res.send(
    `<h1>API PAGE - Prof. Acauan Ribeiro</h1>
    <h3>Lista de APIs válidas:</h3>
    <ul>
      <li><a href="${baseUrl}/alunos">/alunos</a> &emsp; | &emsp; JSON com lista de alunos de exemplo </li>
    </ul>
    `
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
