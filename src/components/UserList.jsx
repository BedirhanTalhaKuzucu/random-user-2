import React from 'react'

function UserList({ userList, deleteButton }) {
    return (

        <table className='userList-table'>
            <thead className='table-head' >
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>AGE</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map((item, index) => {return(
                        <tr key={index} id = {index}>
                            <td>{item.name.first + " " + item.name.last}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.dob.age} </td>
                            <td><i className="ico-times" role="img" aria-label="Cancel" onClick={() => {deleteButton(userList.indexOf(item))}}></i></td>
                        </tr>
                    )
                    })
                }
            </tbody>
        </table>


    )
}

export default UserList