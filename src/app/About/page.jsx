import React from 'react'

const page = () => {

    const user = async() => {
        'https://jsonplaceholder.typicode.com/todos', {
            next: {
                revalide: 50
            }
        }
    }

    const data= await response.json()
    return (
        <>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <div>Users</div>
            {user.map(item => {
                <li id='item.id'>{item}</li>
            })}
        </>
    )
}

export default page