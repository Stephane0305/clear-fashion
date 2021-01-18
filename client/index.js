// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);





/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const link = 'https://www.loom.fr/products/le-t-shirt';
console.log(link);

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

console.log(marketplace);

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

const lenght_market = marketplace.length;

console.log(lenght_market);


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

const name_brand = [];
for(var i = 0; i < marketplace.length; i++)
{
  if(name_brand.includes(marketplace[i]["brand"]) == false)
  {
    name_brand.push(marketplace[i]["brand"])
  }
}

console.log(name_brand);

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

const sort_price = marketplace.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

console.log(sort_price);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

const sort_date = marketplace.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});

console.log(sort_date);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

const filter = [];
marketplace.forEach((item) =>
{
  if((item.price > 50)&&(item.price<100))
  {
    filter.push(item);
  }
})

console.log(filter);

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average



/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
// 2. Log the variable
// 3. Log the number of products by brands

const brands1 = [];
const brands2 = [];
const brands3 = [];
const brands4 = [];
const brands5 = [];
const brands = [];
marketplace.forEach((items) =>
{
  if(items.brand == "adresse")
  {
    brands1.push(items);
  }
  if(items.brand == "loom")
  {
    brands2.push(items);
  }
  if(items.brand == "aatise")
  {
    brands3.push(items);
  }
  if(items.brand == "1083")
  {
    brands4.push(items);
  }
  if(items.brand == "dedicated")
  {
    brands5.push(items);
  }
})
brands.push(brands1);
brands.push(brands2);
brands.push(brands3);
brands.push(brands4);
brands.push(brands5);

console.log(brands);
console.log("addresse a " + brands1.length);
console.log("loom a " + brands2.length);
console.log("aatise a " + brands3.length);
console.log("1083 a " + brands4.length);
console.log("dedicated a " + brands5.length);


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

const b1 = [];
const b2 = [];
const b3 = [];
const b4 = [];
const b5 = [];
marketplace.forEach((items) =>
{
  if(items.brand == "adresse")
  {
    b1.push(items);
  }
  if(items.brand == "loom")
  {
    b2.push(items);
  }
  if(items.brand == "aatise")
  {
    b3.push(items);
  }
  if(items.brand == "1083")
  {
    b4.push(items);
  }
  if(items.brand == "dedicated")
  {
    b5.push(items);
  }
})
const p1 = b1.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
const p2 = b2.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
const p3 = b3.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
const p4 = b4.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
const p5 = b5.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

const br1 = [];
const br2 = [];
const br3 = [];
const br4 = [];
const br5 = [];
marketplace.forEach((items) =>
{
  if(items.brand == "adresse")
  {
    br1.push(items);
  }
  if(items.brand == "loom")
  {
    br2.push(items);
  }
  if(items.brand == "aatise")
  {
    br3.push(items);
  }
  if(items.brand == "1083")
  {
    br4.push(items);
  }
  if(items.brand == "dedicated")
  {
    br5.push(items);
  }
})
const s1 = br1.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});
const s2 = br2.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});
const s3 = br3.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});
const s4 = br4.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});
const s5 = br5.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
});

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products



/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

const new_prod = [];
COTELE_PARIS.sort((items) =>
{
  var date1 = new Date("2021-01-18"); 
  var date2 = new Date(items.date); 
  
  var diffDays = date1.getTime() - date2.getTime();
})

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

const reasonable = [];
COTELE_PARIS.forEach((items) =>
{
  if(items.price < 100)
  {
    reasonable.push(items);
  }
})
if(reasonable.length == COTELE_PARIS.length)
{
  console.log("COTELE PARIS is a reasonable price shop");
}
else
{
  console.log("COTELE PARIS is not a reasonable price shop");
}

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

COTELE_PARIS.forEach((items) =>
{
  if(items.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`)
  {
    console.log(items);
  }
})

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
