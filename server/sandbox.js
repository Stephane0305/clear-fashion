/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const axios = require('axios');
const cheerio = require('cheerio');
const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb+srv://ClearFashionDB:7qcEJ0CXlAwVh40z@clearfashiondatabase.h8eeq.mongodb.net/ClearFashionDB?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'ClearFashionDB';

async function sandbox () {
  try {
    const dedicatedB = await dedicatedbrand.cat('https://www.dedicatedbrand.com', '.mainNavigation-link-subMenu-link.mainNavigation-link-subMenu-link--image', 'dedicated');
    const Mud = await dedicatedbrand.cat('https://mudjeans.eu/', '.header-nav-link.level-3', 'mud');
    const Adresse = await dedicatedbrand.cat('https://adresse.paris/630-toute-la-collection?id_category=630&n=109', '.product-name', 'adresse');

    const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
	const db =  client.db(MONGODB_DB_NAME)

    const collection_Dedicated = db.collection('Products_DedicatedB');
    for(const element of dedicatedB)
    {
    	const result = collection_Dedicated.insertMany(element);
    }

    const collection_Mud = db.collection('Products_Mud');
    for(const element of Mud)
    {
    	const result = collection_Mud.insertMany(element);
    }

    const collection_Adresse = db.collection('Products_Adresse');
    const result = collection_Adresse.insertMany(Adresse);

  	const SortBrand = await collection_Adresse.find({b: 'dedicated'}).toArray();

  	console.log("Brand");
  	console.log(SortBrand);

    const price = 30;
  	const LessPrice = await collection_Dedicated.find({ price: { $lt: price }}).toArray();

  	console.log("Less than a price: ");
  	console.log(LessPrice);

  	const SortedPrice = await collection_Mud.aggregate([{ $sort : { price : 1 }}]).toArray();

  	console.log("Sorted by price: ")
  	console.log(SortedPrice);


  	//await client.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox();
