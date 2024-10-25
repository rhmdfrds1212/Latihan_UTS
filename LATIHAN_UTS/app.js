const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/latihan_uts', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));