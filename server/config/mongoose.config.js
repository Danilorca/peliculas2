const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/crud_peliculas", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("BASES DE DATOS READY"))
	.catch(err => console.log("Algo salió mal", err));