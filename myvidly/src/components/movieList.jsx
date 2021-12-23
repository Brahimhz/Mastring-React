import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';

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


    handleClick = (movie) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
    }

    renderTable(){
        const movieLenght = this.state.movies.length;

        if(movieLenght === 0)
            return null;

        return (
            <table className="table m-3">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Like</th>
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

                                <td>
                                    <Like 
                                        key={movie._id} 
                                        liked={movie.liked} 
                                        onClick={() => this.handleClick(movie)}
                                    />
                                </td>

                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        onClick={() => this.DeleteMovie(movie._id)}>
                                            Delete
                                    </button>
                                </td>
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