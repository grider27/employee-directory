import React from "react";
import "./style.css";
import moment from 'moment';


function Table(props) {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredEmployees.map((employee) => {
                    return (
                        <tr key={employee.id.value}>
                            <td>
                                <img
                                    src={employee.picture.thumbnail}
                                    alt={employee.name.last}
                                />
                            </td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.phone}</td>
                            <td><a href="mailto: {employee.email}">{employee.email}</a></td>
                            <td>{moment(employee.dob.date).format('L')}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}

export default Table;