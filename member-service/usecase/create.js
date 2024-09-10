const config = require("../infrastructure/config");
const interfaceCustomer = require("../infrastructure/webclient");

module.exports = async(request, response) => {
    const data = request.body;

    try {
        const Card = config().Card;
        const Member = config().Member;
        const card = await Card.create(data);
        const customer = await interfaceCustomer();
        const customer_registored = customer.map((customer) => customer.id);
        const member_list = [];

        for (let i = 0; i < data.member_list.length; i++) {
            let member_data = data.member_list[i]

            member_data.cardId = card.id;
            if (!customer_registored.includes(member_data.customerId)) {
                response.json({
                    message: "customer not registored"
                })
            }
            const member = await Member.create(member_data);

            member_list.push(member);
        }
        response.json({
            card,
            member_list
        })
    } catch (err) {
        console.log(err);
        response.json({
            message: "create exception!",
            errors: err.errors.map(e => e.message)
        })
    }
}
