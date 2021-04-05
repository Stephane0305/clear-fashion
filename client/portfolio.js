'use strict';
// client vercel : https://client-five-lake.vercel.app
// server vercel : https://server-rho-flame.vercel.app/products/app

// current products on the page
let currentProducts = [];
let currentPagination = {};
let currentFavorite = [];
let checkFavorite = 0;

// inititiqte selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const selectBrand = document.querySelector('#brand-select');
const selectFilter = document.querySelector('#filter-select');
const selectSort = document.querySelector('#sort-select');
const selectFavorite = document.querySelector('#favorite-select');
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');
const spanNbNewProducts = document.querySelector('#nbnewProducts');
const spanP50 = document.querySelector('#P50');
const spanP90 = document.querySelector('#P90');
const spanP95 = document.querySelector('#P95');

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {
  currentProducts = result;
  currentPagination = meta;
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async(page=1, size=12) => {
  try {
    const response = await fetch(
      `https://server-rho-flame.vercel.app/products/app?page=${page}&size=${size}`
    );
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;
  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */
const renderProducts = products => {
  console.log(products);
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  const template = products
    .map(product => {
      return `
      <div class="product" id=${product._id}>
        <input type="checkbox" id='${product.name}' name="favourite">
        <span>${product.b}</span>
        <a href="${product.link}" target="_blank">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
    })
    .join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};

const ListBrand = products => {
  const name_brand = [];
  for(var i = 0; i < products.length; i++)
  {
    if(name_brand.includes(products[i]["b"]) == false)
    {
      name_brand.push(products[i]["b"])
    }
  }
  return name_brand;
}

const renderBrand = brand => {
  const options = Array.from(
    {'length': brand.length},
    (value, index) => `<option value="${brand[index]}">${brand[index]}</option>`
  ).join('');

  selectBrand.innerHTML = options;
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = (products, pagination) => {
  const {count} = pagination;
  const sort_price = products.sort((a, b) => (a.price > b.price ? 1 : -1));
  let countnew = 0;
  let P50 = 0;
  let P90 = 0;
  let P95 = 0;
  let today = new Date();
  var one_day=1000*60*60*24;
  for(var i = 0; i < products.length; i++)
  {
    let date = new Date(products[i]["released"])
    let diff = today - date;
    var day = Math.round(diff/one_day)
    if(day < 15)
    {
      ++countnew; 
    }
  }
  if(sort_price.length%2 == 0)
  {
    P50 = sort_price[(sort_price.length/2)+1]["price"];
  }
  else
  {
    P50 = sort_price[sort_price.length/2]["price"];
  }
  const l1 = Math.round(sort_price.length*0.1);
  const l2 = Math.round(sort_price.length*0.05);
  P90 = sort_price[l1]["price"];
  P95 = sort_price[l2]["price"];

  spanNbProducts.innerHTML = count;
  spanNbNewProducts.innerHTML = countnew;
  spanP50.innerHTML = P50;
  spanP90.innerHTML = P90;
  spanP95.innerHTML = P95;
};

const sortbrand = (products, brand) => {
  const sort_product = [];
  for(var i = 0; i < products.length; i++)
  {
    if(products[i]["b"] == brand)
    {
      sort_product.push(products[i]);
    }
  }
  renderProducts(sort_product);
}

const sortdate = (products, type) => {
  const sort_product = [];
  let today = new Date();
  var one_day=1000*60*60*24;
  for(var i = 0; i < products.length; i++)
  {
    let date = new Date(products[i]["released"])
    let diff = today - date;
    var day = Math.round(diff/one_day)
    if(type == "asc")
    {
        if(day < 15)
      {
        sort_product.push(products[i]);
      }
    }
    else
    {
      if(day > 300)
      {
        sort_product.push(products[i]);
      }
    }
  }
  render(sort_product, currentPagination);
}

const sortcheap = (products, type) => {
  const sort_product = [];
  for(var i = 0; i < products.length; i++)
  {
    if(type == "asc")
    {
      if(products[i]["price"] <= 50)
      {
        sort_product.push(products[i]);
      }
    }
    else
    {
      if(products[i]["price"] >= 100)
      {
        sort_product.push(products[i]);
      }
    }
  }
  renderProducts(sort_product);
}

const sortprice = (products) => {
  const sort_price = products.sort((a, b) => (a.price > b.price ? 1 : -1));

  renderProducts(sort_price);
}

const addfavorite = (product) => {
  if(currentFavorite.includes(product) == false)
  {
    currentFavorite.push(product)
  }
  else if(currentFavorite.includes(product) == true)
  {
    for(var i = 0; i < currentFavorite.length; i++)
    {
      if(currentFavorite[i] == product)
      {
        currentFavorite.splice(i,1);
      }
    }
  }
}

const renderFavorite = (check) => {
  if(checkFavorite == 0)
  {
    checkFavorite = 1;
    renderProducts(currentFavorite);
  }
  else
  {
    checkFavorite = 0;
    renderProducts(currentProducts);
  }
}

const render = (products, pagination) => {
  renderProducts(products);
  renderPagination(pagination);
  renderIndicators(currentProducts, pagination);
  const brand = ListBrand(currentProducts);
  renderBrand(brand);
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 * @type {[type]}
 */
selectShow.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, parseInt(event.target.value))
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});

selectPage.addEventListener('change', event => {
  fetchProducts(parseInt(event.target.value), currentProducts.length)
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});

selectBrand.addEventListener('change', event => {
  sortbrand(currentProducts, event.target.value)
});

selectFilter.addEventListener('change', event => {
  console.log(event.target.value);
  if(event.target.value == "date-asc")
  {
    sortdate(currentProducts, "asc")
  }
  if(event.target.value == "date-desc")
  {
    sortdate(currentProducts, "desc")
  }
  if(event.target.value == "price-asc")
  {
    sortdate(currentProducts, "asc")
  }
  if(event.target.value == "price-desc")
  {
    sortdate(currentProducts, "desc")
  }
});

selectSort.addEventListener('change', event => {
  if(event.target.value == "price")
  {
    sortprice(currentProducts);
  }
});

sectionProducts.addEventListener('change', event => {
  for(var i = 0; i < currentProducts.length; i++)
  {
    if(currentProducts[i].name == event.target.id)
    {
      addfavorite(currentProducts[i]);
    }
  }
});

selectFavorite.addEventListener('change', event => {
  renderFavorite(1);
});

document.addEventListener('DOMContentLoaded', () =>
  fetchProducts()
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination))
);