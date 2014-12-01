// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user_id: Schema.Types.ObjectId,
    votes: {type: Number, default: 0},
    review_count: {type: Number, default: 0},
    username: String,
    password: String
});

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});