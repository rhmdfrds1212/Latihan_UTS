const express = require('express');
const router = express.Router();
const ProdukController = require('../controllers/produkController');

router.get('/topiccollection', ProdukController.index);

router.post('/topiccollection/insert', ProdukController.produk);

module.exports = router;