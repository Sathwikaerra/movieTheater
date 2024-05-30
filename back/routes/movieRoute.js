import express from "express";
import { addMovie,getMoviebyId,getMovies,deleteMovie } from "../controller/moviecontroller.js";
const movieRouter=express.Router();

movieRouter.post('/',addMovie)
movieRouter.get('/allmovies',getMovies)
movieRouter.get('/:id',getMoviebyId)
movieRouter.delete('/:id',deleteMovie);

export default movieRouter; 