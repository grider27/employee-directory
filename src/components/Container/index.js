import React, { Component } from "react";
//import Search from "../Search";
//import Table from "../Table";
import API from "../../utils/API";


class Container extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        sortBy: "asc",
        error: "",
    };

    componentDidMount() {
        API.getEmployeeList()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results,
                })
            )
            //.then(() => console.log(this.state.employees))
            .catch((err) => {
                this.setState({ error: err.message });
            });
    }



    render() {
        return (
            <p>container T</p>
        );
    }
}

export default Container;