var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var uploadsSchema = new Schema({
	'image' : String
});

module.exports = mongoose.model('uploads', uploadsSchema);
