import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {

    state = {
        movies : getMovies()
    };

    render() { 
        return (
        
        <div className='m-5'>
            <span className='font-weight-bold'>{this.TopParg()}</span>

            {this.renderTable()}
            


        </div>
        
        );
    }

    renderTable(){
        const movieLenght = this.state.movies.length;

        if(movieLenght === 0)
            return null;

        return (
            <table class="table m-3">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {this.state.movies.map(movie => 
                            <tr key={movie._id}>
                                <th scope="row">{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => this.DeleteMovie(movie._id)}>Delete</button></td>
                            </tr>                            
                        )}
                    
                </tbody>
            </table>
        );
    }

    DeleteMovie = id => {
        var oldMovies = this.state.movies;

        var newList = oldMovies.filter(movie => movie._id != id);

        this.setState({ movies : newList});
    };

    TopParg(){
        const movieLenght = this.state.movies.length;
        
        return movieLenght === 0 ? "There are no movies in the database" : "Showing " + movieLenght + " movie(s) in the database";
        
    }
}


export default Movies;