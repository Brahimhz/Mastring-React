import React, { Component } from 'react'

const Like = (props) => {
    let classes = "fa fa-heart"
    
    classes += !props.liked ? "-o" : "" ;
    
    return (
    
        <i 
            className={classes} 
            style={{cursor : "pointer"}}
            onClick={props.onClick}
            aria-hidden="true"></i>
    
    );
}
 
export default Like;