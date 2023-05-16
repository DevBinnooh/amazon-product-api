const amazonScraper = require('./index');

test('asin', async () => {
    const asin = await amazonScraper.asin({ asin: 'B01GW3H3U8' });
    expect(asin).toBeDefined();
});

test('categories', async () => {
    const categories = await amazonScraper.categories();
    expect(categories).toBeDefined();
});

test('countries', async () => {
    const countries = await amazonScraper.countries();
    expect(countries.length).toBeGreaterThan(0);
    const us = countries.find(({ country_code }) => country_code.toLowerCase() === 'us');
    expect(us).toBeDefined();
});

test('products', async () => {
    const products = await amazonScraper.products({ keyword: 'Xbox One', number: 1 });
    expect(Object.keys(products || {}).length).toBeGreaterThan(0);
});

test('reviews', async () => {
    const reviews = await amazonScraper.reviews({ asin: 'B01GW3H3U8' });
    expect(reviews).toBeDefined();
});

test('countrySA', async () => {
    const countries = await amazonScraper.countries();
    expect(countries.length).toBeGreaterThan(0);
    const sa = countries.find(({ country_code }) => country_code.toLowerCase() === 'sa');
    expect(sa).toBeDefined();
});

test('saudiProducts', async () => {
    const products = await amazonScraper.products({ keyword: 'Iphone', number: 50, country: 'SA' });
    expect(products.result.length).toBeGreaterThan(0);
});