import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Home = () => {
    const params = useParams();
    const user = params.user;
    const role = params.role;
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/product?role=${role}`,
    {
      method: "GET",
    headers: {
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setData(json);
    })
    }, [])
    console.log(data)
  return (
    <div>Home
    <h1>Welcome {user}</h1>
    <table>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Description</th>
    <th>Image</th>
  </tr>
{data.map(item => {
    return (
    <tr>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.description}</td>
    <td><img src={item.image} /></td>
  </tr>
    )
})}
</table>
    </div>
  )
}
