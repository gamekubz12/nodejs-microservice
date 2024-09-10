const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const data = request.body;

    try {
        const Product = config().Product;
        const product = await Product.create(data);

        response.json(product);

    } catch (err) {
        console.log(err);
        response.json({
            message: "create exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
