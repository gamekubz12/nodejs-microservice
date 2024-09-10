const config = require("../infrastructure/config");
const interfaceProduct = require("../infrastructure/webclient");

module.exports = async(request, response) => {
    const customerId = request.params.id;

    try {
        const Customer = config().Customer;
        const Order = config().Order;
        const customer = await Customer.findOne({
            where: {
                id: customerId
            },
            include:  {
                model: Order
            }
        })
        const product = await interfaceProduct();
        let customer_json = customer.toJSON();

        customer_json.orders = product.map((product) =>  {
            for (let i = 0; i < customer_json.orders.length; i++) {
                if (product.id == customer_json.orders[i].productId) {
                    return product;
                }
            }
        })
        response.json(customer_json);

    } catch (err) {
        console.log(err);
        response.json({
            message: "find one exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
