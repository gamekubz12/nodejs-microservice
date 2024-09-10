const { Sequelize } = require('sequelize');
const { customer, order } = require('../entity/model');

module.exports = () => {
	const sequelize = new Sequelize(
		process.env.CUSTOMER_DB_NAME,
		process.env.CUSTOMER_DB_USERNAME,
		process.env.CUSTOMER_DB_PASSWORD,
		{
			host: process.env.CUSTOMER_DB_HOST,
			dialect: 'postgres'
		}
	)
	const Customer = sequelize.define("customers", customer(), {});
	const Order = sequelize.define("orders", order(), {});

	Customer.hasMany(Order, {onDelete: 'CASCADE'});
    Order.belongsTo(Customer);

	return {
		sequelize,
		Customer,
		Order
	}
}
