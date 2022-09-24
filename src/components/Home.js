import React from 'react'
import phoneDetails from '../phoneDetails.json'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='box'>
        <div>
            <h1>Phone List</h1>
        </div>
        <div>
            <table className='table'>
                <tbody>
                    {phoneDetails.map(data=>
                         <tr>
                         <td>{data.id}</td>
                         <td>{data.name}</td>
                         <td><Link to={'/details/'+data.id}>View</Link></td>
                     </tr>)}
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home