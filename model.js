
// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var dbSchema = mongoose.Schema({
    locationlat: {
        type: Double,
        required: true
    },
    locationlog: {
        type: Double,
        required: true
    },
    imageurl: String,
    locality: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Db = module.exports = mongoose.model('db', dbSchema);
module.exports.get = function (callback, limit) {
    Db.find(callback).limit(limit);
}
