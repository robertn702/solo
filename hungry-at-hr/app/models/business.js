// grab the mongoose module
var mongoose = require('mongoose');

var businessSchema = mongoose.Schema({
    business_id: Schema.Types.ObjectId,
    full_address: {type: String, default: ''},
    lunch: Boolean,
    dinner: Boolean,
    latitude: {type: Number, default: 0},
    longitude: {type: Number, default: 0},
    stars: {type: Number, default: 0},
    review_count: {type: Number, default: 0},
    business_name: String
});

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Business', {
    name : {type : String, default: ''}
});