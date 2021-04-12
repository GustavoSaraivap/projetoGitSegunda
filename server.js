const express = require("express");
var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './projetoSegunda')));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, './projetoSegunda/index.html'));
});

app.listen(8000, () => {
    console.log(`Servidor rodando na porta 8000`);
  });