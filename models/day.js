var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
	number: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1
		}
	}
});





module.exports = Day;