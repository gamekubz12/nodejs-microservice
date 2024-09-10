const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    try {
        const Customer = config().Customer;
        const customers = await Customer.findAll();

        response.json(customers);

    } catch (err) {
        console.log(err);
        response.json({
            message: "find all exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
