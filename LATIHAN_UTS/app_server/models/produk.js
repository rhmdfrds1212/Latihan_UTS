nama : String
deskripsi : String / required;
harga : Number / required;
stok : Number;
kategori_id : ObjectId;

const schema = new mongoose.Schema({ name: String, size: String });
const Tank = mongoose.model('Tank', schema);

let mongoose = require("mongoose");

let schemaPRODUK = new mongoose.Schema({
  nama: String,
  deskripsi: String,
  harga: Number,
  stok: Date,
  kategori_id: {
    type: ObjectId,
    require: true,
  } 
});

//create Model from Schema
mongoose.model("Produk", schemaPRODUK);