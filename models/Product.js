var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
	customer_no: {type: String},
	date: {type: String},
	time_in1: {type: String},
	time_out1: {type: String},
	age_group1: {type: String},
	gender1: {type: String},
	time_in2: {type: String},
	time_out2: {type: String},
	age_group2: {type: String},
	gender2: {type: String},
	  
});

module.exports = mongoose.model('Products', productSchema);