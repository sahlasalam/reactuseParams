import React from 'react'
import phoneDetails from '../phoneDetails.json'
import {useParams} from 'react-router-dom'

function Details() {

    let {id} = useParams();
    // console.log(id);

    const phoneData= phoneDetails.find((item)=>item.id===id)
    // console.log(phoneData);
  return (
    <div className='box'>
        <div>
            <h1>
                Phone Details
            </h1>
        </div>
        <div>
            <h2 className='name'>{phoneData.name}</h2>
            <h4>{phoneData.about}</h4>
        </div>
    </div>
  )
}

export default Details