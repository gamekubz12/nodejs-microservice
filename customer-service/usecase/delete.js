const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const customertId = request.params.id;

    try {
        const Customer = config().Customer;
        const result = await Customer.destroy({
            where: {
                id: customertId
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
