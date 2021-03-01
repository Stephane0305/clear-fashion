const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage e-shop
 * @param  {String} data - html response
 * @return {Array} products
 */
const parse = (data, brand) => {
  const $ = cheerio.load(data);
  if(brand == "dedicated")
  {
    return $('.productList-container .productList').map((i, element) => {
      const name = $(element)
        .find('.productList-title')
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = parseInt(
        $(element)
          .find('.productList-price')
          .text()
      );

      return {name, price};
    })
    .get();
  }
  if(brand == "mud"){
    return $('.product-link.product-link__grid').map((i, element) => {
      const name = $(element)
        .find('.product-title')
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = 
        $(element)
          .find('.product-price')
          .text()

      return {name, price};
    })
    .get();
  }
  if(brand == "adresse"){
    return $('.product-name').map((i, element) => {
      const name = $(element)
        .text()
        .trim()
        .replace(/\s/g, ' ');
      const price = 
        $(element)
          .find('.product-price')
          .text()

      return {name, price};
    })
    .get();
  }
};

const cat = async (link, path, brand) => {
  const response = await axios(link);
  const {data, status} = response;
  const $ = cheerio.load(data);
  const links = [];

  if(brand == "dedicated")
  {
    const category = $(path).map((i, element) => {
      const l = link + $(element).find('a').attr('href');
      if(l.includes("/men/") == true)
      {
        links.push(l);
      }
    });
    for(const element of links)
    {
      const products = await scrape(element, brand);
      console.log(`🕵️‍♀️  browsing ${element}`);
      console.log(products);
      console.log(products.length);
      console.log('done');
    } 
  }
  if(brand == "mud"){
    const category = $(path).map((i, element) => {
      const l = link + $(element).attr('href');
      if(l.includes("/men-") == true)
      {
        links.push(l);
      }
    });
    for(const element of links)
    {
      const products = await scrape(element, brand);
      console.log(`🕵️‍♀️  browsing ${element}`);
      console.log(products);
      console.log(products.length);
      console.log('done');
    } 
  }
  if(brand == "adresse"){
    const products = await scrape(link, brand);
    console.log(`🕵️‍♀️  browsing ${link}`);
    console.log(products);
    console.log(products.length);
    console.log('done');
  }
};

/**
 * Scrape all the products for a given url page
 * @param  {[type]}  url
 * @return {Array|null}
 */
const scrape = async (url, brand) => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data, brand);
  }

  console.error(status);

  return null;
};

module.exports = { cat, scrape };