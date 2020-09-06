const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (request,response) => {
    const teste = request.query
    console.log(teste);
    response.json({xxx:50, teste})
})

app.listen(3333)