const express = require('express');
const app = express();
const alunos = require('./api/alunos');

app.use(express.json({extended: false}));

app.use("/api/alunos", alunos);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));