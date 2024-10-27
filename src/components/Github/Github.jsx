import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://github.com/PiyushKahale')
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

    return (
        <div className='text-center m-4 bg-green-600 text-white
        p-4 text-2xl'>Github Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git Profile"  />
        </div>
    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('GET https://graph.facebook.com/v17.0/{instagram-user-id}?fields=followers_count&access_token={your-access-token}')
//     return response.json()
// }
