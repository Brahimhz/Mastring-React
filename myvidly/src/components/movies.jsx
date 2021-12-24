import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies : [],
        genres :  [],
        pageSize : 4,
        currentPage : 1,
        sortColumn : { path : 'title' , order : 'asc'}
    };

    componentDidMount(){
        const allGenre = { _id : '' , name : "All Genres"};
        const genres = [ allGenre, ...getGenres()]
        this.setState({ movies : getMovies() , genres ,selectedGenre : allGenre })
    }

    //Handle Evenets

    handleLike = (movie) => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].liked = !movies[index].liked;

        this.setState({movies});
    }

    handlePageChange = page =>{
        this.setState({currentPage : page});
    }

    handleDeleteMovie = id => {
        var oldMovies = this.state.movies;

        var newList = oldMovies.filter(movie => movie._id !== id);

        this.setState({ movies : newList});
    };

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre : genre , currentPage : 1 });
    }

    handleSort = sortColumn => {
        if(sortColumn.path)
            this.setState({ sortColumn });
            
    }

    getPagedData = () => {
         
        const { 
            pageSize ,
            currentPage ,
            movies : allMovies ,
            selectedGenre ,
            sortColumn }
             = this.state;

        // 1- Filter
        const filteredMovies = 
            selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
            : allMovies;

        // 2- Sort
        const sorted = _.orderBy(filteredMovies,[sortColumn.path],[sortColumn.order]);
        
        // 3- Paginate 
        const movies = paginate(sorted,currentPage,pageSize);

        return {totalCount : filteredMovies.length , data : movies};
    }

    render() { 

        const { 
                pageSize ,
                currentPage ,
                selectedGenre ,
                sortColumn }
                 = this.state;

        
        const {totalCount , data : movies} = this.getPagedData();
        
        return (
        
        <div className="row m-5">

            <div className="col-3">
                <ListGroup 
                    items = {this.state.genres} 
                    selectedItem = {selectedGenre}
                    onItemSelect= {this.handleGenreSelect}
                />
            </div>

            <div className="col">

                <p>{totalCount === 0 ? "There are no movies in the database" : "Showing " + totalCount + " movie(s) in the database"}</p>

                <MoviesTable 
                    movies = {movies}
                    sortColumn = {sortColumn}
                    onLike = { this.handleLike} 
                    onDeleteMovie = { this.handleDeleteMovie} 
                    onSort = {this.handleSort}
                />

                <Pagination 
                    itemsCount={totalCount} 
                    pageSize={pageSize} 
                    onPageChange={this.handlePageChange}
                    currentPage = {currentPage} 
                />
        </div>
            
            


        </div>
        
        );
    }
}


export default Movies;