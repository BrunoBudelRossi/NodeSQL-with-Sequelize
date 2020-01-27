const express = require('express');
const routes = require('./routes');

require('./database'); // procura direto pelo index

const app = express();

app.use(express.json()); // manda o express usar formato json

app.use(routes);    // use é como se fosse um require, chama o arquivo de routes

app.listen(3333);   // porta que esta rodando no localhost 