const dedicatedbrand = require('./sources/dedicatedbrand');
const axios = require('axios');
const cheerio = require('cheerio');
const {MongoClient} = require('mongodb');
const db = require('./db');

async function sandbox () {
  try {
    const dedicatedB = await dedicatedbrand.cat('https://www.dedicatedbrand.com', '.mainNavigation-link-subMenu-link.mainNavigation-link-subMenu-link--image', 'dedicated');
    const Mud = await dedicatedbrand.cat('https://mudjeans.eu/', '.header-nav-link.level-3', 'mud');
    const Adresse = await dedicatedbrand.cat('https://adresse.paris/630-toute-la-collection?id_category=630&n=109', '.product-name', 'adresse');
    console.log(dedicatedB.length);
    console.log(Mud.length);
    console.log(Adresse.length);
    for(const element of dedicatedB)
    {
    	const result = db.insert(element);
    }

    for(const element of Mud)
    {
    	const result = db.insert(element);
    }

    const result = db.insert(Adresse);

  	const SortBrand = await db.find({b: 'dedicated'});

    const price = 30;
  	const LessPrice = await db.find({ price: { $lt: price }});

  	const SortedPrice = await db.find([{ $sort : { price : 1 }}]);

  	await client.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox();
