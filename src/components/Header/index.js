import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="container-fluid-nav text-center">
                <h1>Employee Directory</h1>
                <h6>Click on carrots to filter by heading or use the search box to narrow your results.</h6>
        </div>
    );
}

export default Header;