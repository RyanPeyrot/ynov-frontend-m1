import React, {useEffect, useState} from 'react';
import Styles from './index.module.scss'
import UserService from "../../../service/user.service";

const Index = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        UserService.getAll(localStorage.getItem('token')).then(res => {
            setUsers(res);
            console.log(res);
        })
    },[])

    return (
        <div>
            <table className={Styles.table__admin}>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Number of places</th>
                    <th>Type</th>
                    <th>Admin</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.length > 0 && users.map((user) => {
                       return (
                            <tr key = {user._id}>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.places.length}</td>
                                <td>{user.type}</td>
                                <td>{user.isAdmin.toString()}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Index;