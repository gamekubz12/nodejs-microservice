const config = require("../infrastructure/config");

module.exports = async(request, response) => {
    const cardId = request.params.id;
    const data = request.body;

    try {
        const Card = config().Card;
        const card = await Card.update(data, {
            where: {
                id: cardId
            }
        })
        response.json(card);

    } catch (err) {
        console.log(err);
        response.json({
            message: "update exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
