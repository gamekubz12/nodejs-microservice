const config = require("../infrastructure/config");
const interfaceProduct = require("../infrastructure/webclient");

module.exports = async(request, response) => {
    const data = request.body;

    try {
        const Customer = config().Customer;
        const Order = config().Order;
        const customer = await Customer.create(data);
        const product = await interfaceProduct();
        const product_stored = product.map((product) => product.id);
        const order_list = [];

        for (let i = 0; i < data.order_list.length; i++) {
            let order_data = data.order_list[i];

            if (!product_stored.includes(order_data.productId)) {
                response.json({
                    message: "product not in stored"
                })
            }
            order_data.customerId = customer.id;

            const order = await Order.create(order_data);

            order_list.push(order);
        }
        response.json({
            customer,
            order_list
        })
    } catch (err) {
        console.log(err);
        response.json({
            message: "create exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
