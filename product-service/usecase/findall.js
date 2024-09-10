const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    try {
        const Product = config().Product;
        const products = await Product.findAll();

        response.json(products);

    } catch (err) {
        console.log(err);
        response.json({
            message: "find all exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
