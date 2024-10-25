const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
  nama: String,
  deskripsi: String,
  harga: Number,
  stok: Number,
  kategori_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Produk', produkSchema);