const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const cardId = request.params.id;

    try {
        const Card = config().Card;
        const result = await Card.destroy({
            where: {
                id: cardId
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
