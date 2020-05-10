const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
  name:{
    type: String,
    maxlength: 20,
    minlength: 2,
    required: true,
    unique: true
  },
});
module.exports = model('Tags', scheme, 'tags');