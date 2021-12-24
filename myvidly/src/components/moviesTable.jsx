import Like from "./common/like";
import React, { Component } from 'react';
import Table from "./common/table/table";


class MoviesTable extends Component {

    columns = [
        { path : "title", label : "Title "} ,
        { path : "genre.name", label : "Genre "} ,
        { path : "numberInStock", label : "Stock "} ,
        { path : "dailyRentalRate", label : "Rate "} ,
        { 
            key : "like",
            label : "Like " ,
            content : movie => 
                        <Like 
                            liked={movie.liked} 
                            onClick={() => this.props.onLike(movie)}
                        />
        } ,
        { 
            key : "action",
            label : "Action ",
            content : movie =>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            onClick={() => this.props.onDeleteMovie(movie._id)}>
                            Delete
                        </button>
        } 
    ];

    render() { 
        
        const { movies , sortColumn , onSort } = this.props;

        return ( 
            <Table 
                columns = {this.columns} 
                sortColumn = {sortColumn}
                onSort = {onSort}
                data = {movies}
            />
        );
    }
}
 
export default MoviesTable;