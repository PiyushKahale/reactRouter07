import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams();

    return (
        <>
        <div className='flex justify-center bg-green-600 p-4'>User: {userId}</div>
        </>
    )
}

export default User
