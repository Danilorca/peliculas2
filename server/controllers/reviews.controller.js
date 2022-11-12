const Movie = require("../models/movies.model")
const {Review} = require("../models/reviews.model")

module.exports.createReview = async (req, res) =>{
  try{
    const {rating,content,creatorName,idMovie} = req.body;
    const review = await Review.create({rating,content,creatorName});
    const movie = await Movie.findById(idMovie).exec();
    movie.reviews.push(review);
    await movie.save();
    res.json({message:"", review:review});
}
catch(err){
    res.json({message:"Algo salio mal",errors:err.errors})
}
}

module.exports.getReviewsFromMovie = async(req,res)=>{
  try{
      const {idMovie} = req.params;
      const movie = await Movie.findById(idMovie).populate("reviews").exec();
      console.log("REVIEWS DE LA PELICULA",movie.reviews);
      res.json({message:"",reviews:movie.reviews})
  }catch(err){
      res.json({message:"Algo salio mal",errors:err.errors})
  }
}
