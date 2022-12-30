const { model, Schema } = require("mongoose");

const Product = new Schema({
  id: Number,
  model: String,
  category: String,
  fav: Boolean,
  usLang: {
    smallDescription: String,
    description: String,
    features: [String],
  },
  esLang: {
    smallDescription: String,
    description: String,
    features: [String],
  },
  urlImg: String,
  rutas: [String],
});

module.exports = model("Product", Product);
