const { Sequelize } = require('sequelize');
const { card, member } = require('../entity/model');

module.exports = () => {
	const sequelize = new Sequelize(
        process.env.MEMBER_DB_NAME,
        process.env.MEMBER_DB_USERNAME,
        process.env.MEMBER_DB_PASSWORD,
        {
            host: process.env.MEMBER_DB_HOST,
            dialect: 'postgres'
        }
    )
	const Card = sequelize.define("cards", card(), {});
	const Member = sequelize.define("members", member(), {});

	Card.hasMany(Member, {onDelete: 'CASCADE'});
    Member.belongsTo(Card);

	return {
        sequelize,
        Card,
        Member
    }
}
