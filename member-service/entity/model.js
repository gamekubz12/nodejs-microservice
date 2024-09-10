const { DataTypes } = require('sequelize');

const Card = {
    card_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    card_group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    card_type: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const Member = {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

module.exports.card = () => Card;

module.exports.member = () => Member;
