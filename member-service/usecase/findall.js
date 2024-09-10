const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    try {
        const Card = config().Card;
        const cards = await Card.findAll();

        response.json(cards);

    } catch (err) {
        console.log(err);
        response.json({
            message: "create exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
