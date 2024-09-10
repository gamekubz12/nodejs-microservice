const { DataTypes } = require('sequelize');

const Customer = {
    customer_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}

const Order = {
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

module.exports.customer = () => Customer;

module.exports.order = () => Order;
