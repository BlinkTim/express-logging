const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/data', (req, res) => {
    res.send('Hier sollten normalerweise Daten stehen');
});

app.post('/data', (req, res) => {
    res.send('POST request to /data');
});

app.put('/data', (req, res) => {
    res.send('PUT request to /data');
});

app.delete('/data', (req, res) => {
    res.send('DELETE request to /data');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        error: 'Something went wrong!',
        message: err.message
    });
});

app.use((req, res, next) => {
    res.status(404).send({
        error: 'Not Found',
        message: 'The requested resource was not found'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
