const MoviesController = require("../controllers/movies.controller")
const ReviewController = require("../controllers/reviews.controller")

module.exports = app =>{

  //movies
  app.get("/api/movies", MoviesController.findAll);
  /* app.post("/api/movies", MoviesController.create); */
  app.post("/api/movies", MoviesController.createMovie);
  app.get("/api/movies/:id", MoviesController.findOne);
  app.put("/api/movies/:id", MoviesController.update)
  app.delete("/api/movies/:id", MoviesController.delete)

  //reviews
  app.post("/api/reviews/new",ReviewController.createReview)
  app.get("/api/reviews/:idMovie", ReviewController.getReviewsFromMovie)

}