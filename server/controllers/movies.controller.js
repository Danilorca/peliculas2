const Movie = require("../models/movies.model")
const { Review } = require("../models/reviews.model")


module.exports.findAll = (req,res) => {
  Movie.find()
    .then((all)=>res.json({movies:all}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.create = (req, res)=>{
  Movie.create(req.body)
    .then((newMovie)=>res.json({message:"",movies:newMovie}))
    .catch((err)=>res.json({message:"algo salio mal", errors:err.errors }))
}


module.exports.createMovie = async(req,res)=>{
  try{
      const {title, year, time, description, director, rating, content, creatorName} = req.body;
      const review = new Review({rating,content,creatorName});
      const movie = new Movie({title, year, time, description, director});
      movie.reviews.push(review);
      await movie.save();
      await review.save();
      res.json({message:"",movie:movie,review:review})
  }
  catch(err){
      res.json({message:"Algo salio mal createMovie", errors:err.errors})
  }
}

module.exports.findOne = (req,res) => {
  Movie.findOne({_id: req.params.id})
    .then((movie)=>res.json({movie:movie}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.update = (req,res) => {
  Movie.findOneAndUpdate({_id:req.params.id},req.body,{new:true, runValidators: true})
    .then((movie)=>res.json({message:"", movie:movie}))
    .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}

module.exports.delete = (req,res) => {
  Movie.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",errors:err.errors}))
}