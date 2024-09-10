const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const productId = request.params.id;

    try {
        const Product = config().Product;
        const product = await Product.findOne({
            where: {
                id: productId
            }
        })
        response.json(product);

    } catch (err) {
        console.log(err);
        response.json({
            message: "find one exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
