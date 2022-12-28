const database = require('./configs/database');
const express = require('express');

database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conexão estabelecida com o banco de dados.');
    }).catch(error => {
        console.log('Não conseguiu conectar com o banco de dados.', error);
        process.exit();
    })

// Criando uma aplicação express
const app = express();

// Definindo que vamos enviar e receber JSON na requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});

