import React, { useEffect, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import LayoutAuth  from "../../components/layout_auth";

export default function UserIndex() {
    const [users, setUser] = useState([''])

    const showHref = "/user/show/";

    const fetchUsers = async () => {
        const fetchUserResponse = await fetch('/api/users');
        const fetchUserResponseData = await fetchUserResponse.json();
        setUser(fetchUserResponseData);
    }
    useEffect(() => {
        fetchUsers();
    })

    const pageContent = () => {
        return (<>
            <a href="/users/create" className="btn btn-primary btn-sm mb-2">Add user</a>
                <div className="table-responsive">
                    <table className="table table-bordered table-lg">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                        {users.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.firstname}</td>
                                    <td>{val.lastname}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobileNumber}</td>
                                    <td>
                                        <Link to={"/users/edit/" + val._id}>Show</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
        </>);
    }
    return (<LayoutAuth element={pageContent}></LayoutAuth>);
}