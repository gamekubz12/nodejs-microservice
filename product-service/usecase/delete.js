const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const productId = request.params.id;

    try {
        const Product = config().Product;
        const result = await Product.destroy({
            where: {
                id: productId
            }
        })
        response.json(result);

    } catch (err) {
        console.log(err);
        response.json({
            message: "delete exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
