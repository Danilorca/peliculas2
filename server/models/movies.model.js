const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type:String,
    required: [true, "El title es obligario (fromBack)"],
    minlength:[2, "El title debe tener minimo 2 caracteres"],
    maxlength:[30, "El title maximo 30 carácteres debe de tener"]
  },
  year: {
    type:Number,
    require: [true, "El año es obligatorio (fromBack)"]
  },
  time: {
    type:Number,
    require: [true, "Debe ingresar el tiempo de duración (fromBack)"]
  },
  description:{
    type:String,
    required: [true, "La descripción es obligatoria (fromBack)"],
    minlength:[2, "La descripción debe tener minimo 2 caracteres"],
    maxlength:[200, "La descripción tiene un máximo 200 carácteres"]
  },
  director:{
    type:String,
    required: [true, "El director es obligatorio (fromBack)"],
    minlength:[2, "El nombre del director debe tener minimo 2 caracteres"],
    maxlength:[100, "El nombre del director tiene un máximo 100 carácteres"]
  },
  reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"Review"}]
}, { timestamps:true }
)

const Movie = mongoose.model("Movie", MovieSchema);

module.exports= Movie;