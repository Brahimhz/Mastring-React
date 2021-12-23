import React, { Component } from 'react'
 
//Stateless Functional Components
const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar 
                    <span className="badge rounded-pill bg-secondary">{totalCounters}</span>
                    </a>
            </div>
        </nav> 
    );
}
 
export default NavBar;

//Class Component
/*
class NavBar extends React.Component {
    render() { 
        return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Navbar 
                    <span className="badge rounded-pill bg-secondary">{this.props.totalCounters}</span>
                    </a>
            </div>
        </nav>
      );
    }
}
 
export default NavBar;
*/