const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const customerId = request.params.id;
    const data = request.body;

    try {
        const Customer = config().Customer;
        const customer = await Customer.update(data, {
            where: {
                id: customerId
            }
        })
        response.json(customer);

    } catch (err) {
        console.log(err);
        response.json({
            message: "create exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
