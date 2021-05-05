import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";


class Container extends Component {
    state = {
        search: "Test",
        employees: [],
        filteredEmployees: [],
        currentSort: 'default',
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
            .then(() => console.log(this.state.employees))
            .catch((err) => {
                this.setState({ error: err.message });
            });
    }

    handleInputChange = async (event) => {
        const value = event.target.value;
        await this.setState({ search: value });
        this.searchEmployees(value);
        console.log(this.state.search)
    };

    searchEmployees = (value) => {
        this.setState({
            filteredEmployees: this.state.employees.filter((employee) => {
                return (
                    employee.name.last.toLowerCase().includes(value.toLowerCase().trim()) ||
                    employee.name.first.toLowerCase().includes(value.toLowerCase().trim())
                );
            }),
        });
        console.log(this.state.filteredEmployees);
    };

    onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};


    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <Table 
                state={this.state}
                filterEmployees={this.filterEmployees}
                />
            </div>
        );
    }
}

export default Container;