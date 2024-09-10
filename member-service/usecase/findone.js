const config = require("../infrastructure/config");
const interfaceCustomer = require("../infrastructure/webclient");

module.exports = async(request, response) => {
    const cardId = request.params.id;

    try {
        const Card = config().Card;
        const Member = config().Member;
        const card = await Card.findOne({
            where: {
                id: cardId
            },
            include:  {
                model: Member
            }
        })
        const customer = await interfaceCustomer();
        let card_json = card.toJSON();

        card_json.members = customer.map((customer) =>  {
            for (let i = 0; i < card_json.members.length; i++) {
                if (customer.id == card_json.members[i].customerId) {
                    return customer;
                }
            }
        })
        response.json(card_json);

    } catch (err) {
        console.log(err);
        response.json({
            message: "find all exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
