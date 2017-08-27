import taxRates from './taxrate';

/* set products here */
const data = [
    {
        "id": 4,
        "name": "book",
        "price": 12.49,
        "inventory": 10,
        "currency": 'US',
        "import": false,
        "basic": false
    }, {
        "id": 5,
        "name": "music CD",
        "price": 14.99,
        "inventory": 10,
        "currency": 'US',
        "import": false,
        "basic": true
    }, {
        "id": 6,
        "name": "chocolate bar",
        "price": 0.85,
        "inventory": 10,
        "currency": 'US',
        "import": false,
        "basic": false
    }, {
        "id": 7,
        "name": "imported box of chocolates",
        "price": 10.00,
        "inventory": 10,
        "currency": 'US',
        "import": true,
        "basic": false
    }, {
        "id": 8,
        "name": "imported bottle of perfume A",
        "price": 47.50,
        "inventory": 10,
        "currency": 'US',
        "import": true,
        "basic": true
    }, {
        "id": 9,
        "name": "imported bottle of perfume B",
        "price": 27.99,
        "inventory": 10,
        "currency": 'US',
        "import": true,
        "basic": true
    }, {
        "id": 10,
        "name": "bottle of perfume",
        "price": 18.99,
        "inventory": 10,
        "currency": 'US',
        "import": false,
        "basic": true
    }, {
        "id": 11,
        "name": "packet of headache pills",
        "price": 9.75,
        "inventory": 10,
        "currency": 'US',
        "import": false,
        "basic": false
    }, {
        "id": 12,
        "name": "imported box of chocolates",
        "price": 11.25,
        "inventory": 10,
        "currency": 'US',
        "import": true,
        "basic": false
    }
];

const taxlogic = (item) => {
    let salesTax = taxRates(item.basic, item.import);

    item.tax = Math.ceil((item.price * salesTax) / 0.05) * 0.05; // the the correct sales tax amount

    item.fullPrice = item.tax + item.price; // get the full price
    item.fullPrice = Number(item.fullPrice).toFixed(2); // format

    item.tax = Number(item.tax).toFixed(2); // format
    return item;
}

let final = data.map(taxlogic)

export default final;
