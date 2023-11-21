import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi';


function View({serverRes}) {

  const [allVideos, setallVideos] = useState([])
  const [deletestatus,setdeletestatus]=useState(false)

  const getallVideos = async () => {

    let response = await getVideo()

    // console.log(response.data);
    setallVideos(response.data)
  }
  console.log(allVideos);

  // for reloading the page

  useEffect(() => {

    getallVideos()


  }, [serverRes,deletestatus])

const handleDeleteStatus=(res)=>{
  setdeletestatus(res)
}


  return (
    <>
      <div className='border p-3 rounded'>
        <Row>

          {
            allVideos.map(video => (
              <Col className='ps-3 mb-3' sm={12} md={6}>
                {/* props is used to pass the data from view to videocard  */}
                <Videocard card={video}  handleDeleteStatus={handleDeleteStatus}/>
              </Col>

            ))



          }
        </Row>




      </div>
    </>
  )
}

export default View