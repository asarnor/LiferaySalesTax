/* set tax rates here */
const taxrates = {
    "basic" : 0.10,
    "import" : 0.05
}

const getTaxRate = (isBasic, isImport) => {
    let rate = 0;
    if (isBasic) {
        rate += Number(taxrates.basic);
    }
    if (isImport) {
        rate += Number(taxrates.import);
    }
    return rate;
}

export default getTaxRate;
