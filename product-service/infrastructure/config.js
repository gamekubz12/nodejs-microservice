// const pg = require("pg");
const { Sequelize } = require('sequelize');
const product = require('../entity/model');

module.exports = () => {
	const sequelize = new Sequelize(
		process.env.PRODUCT_DB_NAME,
		process.env.PRODUCT_DB_USERNAME,
		process.env.PRODUCT_DB_PASSWORD,
		{
			host: process.env.PRODUCT_DB_HOST,
			dialect: 'postgres'
		}
	)
	const Product = sequelize.define("products", product(), {});

	return {
		sequelize,
		Product
	}
}
