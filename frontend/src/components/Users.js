import React, { useState, useEffect  } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/users")
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setUsers(jsonRes.usersList))
    })

    return (
        <div className="">
            {users.map(user => <li>{user}</li>)}
        </div>
    )
}

export default Users;