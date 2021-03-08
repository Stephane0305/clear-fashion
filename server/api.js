const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('./db');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products/:id', async (request, response) => {
	const result = await db.find({'_id': `${request.params.id}`});
	response.send(result);
});

app.get('/products/search', async (request, response) => {
    let limit = request.query.limit;
    let brand = request.query.brand;
    let price = request.query.price;

    
});

app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
