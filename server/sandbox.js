/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const axios = require('axios');
const cheerio = require('cheerio');

async function sandbox () {
  try {
    const dedicatedB = dedicatedbrand.cat('https://www.dedicatedbrand.com', '.mainNavigation-link-subMenu-link.mainNavigation-link-subMenu-link--image', 'dedicated');
    //const Mud = dedicatedbrand.cat('https://mudjeans.eu/', '.header-nav-link.level-3', 'mud');
    //const Adresse = dedicatedbrand.cat('https://adresse.paris/630-toute-la-collection?id_category=630&n=109', '.product-name', 'adresse');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox();
