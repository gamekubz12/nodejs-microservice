const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const productId = request.params.id;
    const data = request.body;

    try {
        const Product = config().Product;
        const product = await Product.update(data, {
            where: {
                id: productId
            }
        })
        response.json(product);

    } catch (err) {
        console.log(err);
        response.json({
            message: "update exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
