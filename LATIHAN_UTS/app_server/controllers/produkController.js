const Produk = require('../models/produk');
	
exports.index = async (req, res) => {
  try {
    const produk = await Produk.find();
    res.status(200).json({
      code: 200,
      message: "Success",
      data: produk
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: "Failed"
    });
  }
};

// Insert new produk
exports.insert = async (req, res) => {
  const { nama, deskripsi, harga, stok, kategori_id } = req.body;
  
  const produk = new Produk({ nama, deskripsi, harga, stok, kategori_id });

  try {
    await produk.save();
    res.status(200).json({
      code: 200,
      message: "Success"
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: "Failed"
    });
  }
};
