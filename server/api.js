const cors = require('cors');
const express = require('express');
const url = require('url');
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

app.get('/products/app', async (request, response) => {
    let page = request.query.page;
    let size = request.query.size;
    page = parseInt(page);
    size = parseInt(size);
    let start = (size*(page-1));
    let end = start + size;
    let products = [];
    const result = await db.find({"price":{$ne:Number("Nan")}});
    console.log("start: " + start);
    console.log("end: " + end);
    for(i=start; i<end; i++){
        if(result[i] != null){
            products.push(result[i])
        }
    }
    const number = await db.count();
    return response.send({"success":true,"data":{"result":products,"meta":{"currentPage":page,"pageCount":Math.round(result.length/size),"pageSize":size,"count":number}}});
});

app.get('/products/search', async (request, response) => {
    let limit = request.query.limit;
    let brand = request.query.brand;
    let price = request.query.price;
    if(brand != null && price != null && limit != null)
    {
    	limit = parseInt(limit);
    	price = parseInt(price);
    	const result = await db.find({'brand': brand, 'price': {$lt : price}}, limit);
    	return response.send(result);
    }
    if(brand != null && price != null)
    {
    	price = parseInt(price);
    	const result = await db.find({'brand': brand, 'price': {$lt : price}}, 12);
    	return response.send(result);
    }
    if(brand != null && limit != null)
    {
    	limit = parseInt(limit);
    	const result = await db.find({'brand': brand}, limit);
    	return response.send(result);
    }
    if(price != null && limit != null)
    {
    	limit = parseInt(limit);
    	price = parseInt(price);
    	const result = await db.find({'price': {$lt : price}}, limit);
    	return response.send(result);
    }
    if(brand != null)
    {
    	const result = await db.find({'brand': brand}, 12);
    	return response.send(result);
    }
    if(price != null)
    {
    	price = parseInt(price);
    	const result = await db.find({'price': {$lt : price}}, 12);
    	return response.send(result);
    }
    if(limit != null)
    {
    	limit = parseInt(limit);
    	const result = await db.find({}, limit);
    	return response.send(result);
    }
    const result = await db.find();
    const number = await db.count();
    return response.send(result); 
});

app.get('/products/:id', async (request, response) => {
	const result = await db.find({'_id': `${request.params.id}`});
	response.send(result);
});

app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
