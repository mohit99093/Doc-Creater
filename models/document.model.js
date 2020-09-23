const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  title: { type: String, required: true},
  lastupdated:{type :String, required:true},
  discription:{type:String, required:true}
});

const Document = mongoose.model('Doument', DocumentSchema);

module.exports = Document;