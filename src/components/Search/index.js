import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="main">
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input 
            id="search"
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            type="text" 
            className="form-control" 
            placeholder="Search" />
        </div>
        </div>
    );

}

export default Search;