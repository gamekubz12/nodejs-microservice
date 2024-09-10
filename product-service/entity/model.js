const { DataTypes } = require('sequelize');

const Product = {
    product_no: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    product_group: {
        type: DataTypes.STRING,
        allowNull: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
}

module.exports = () => Product;
