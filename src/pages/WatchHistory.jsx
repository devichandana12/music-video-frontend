import React, { useEffect, useState } from 'react'
import { getWatchHistory } from '../services/allapi'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'



function WatchHistory() {
  const [History, setHistory] = useState([])

  const getHistroy = async () => {

    // for grtting data in array format  {data}
    let { data } = await getWatchHistory()
    // console.log(data)
    setHistory(data)



  }
  console.log(History);
  useEffect(() => {
    getHistroy()



  }, [])

  return (
    <>
    
        <h1>
          Watch History
        </h1>

       
      

      <table className='table-shadow border rounded m-3'>

        <thead>
          <tr >
            <th>No</th>
            <th>Name</th>
            <th>Url</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody >

          {
            History?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.cardName}</td>
                <td>{item.url}</td>
                <td>{item.date}</td>
              </tr>


            ))
          }




        </tbody>
       








      </table>
      <span style={{color:'blue'}}><ArrowLeft/></span>
      <Link to={'/home'} style={{textDecoration:'none',color:'blue' ,fontSize:'22px'}}>Back</Link>
      



    </>
  )
}

export default WatchHistory