const Product = require('../models/produk');

const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

const produk = (req,res) => {
	res.render('produk', { title:
		'Express'});
};
module.exports = { index }; 
