import React from 'react'
import { PlusCircle } from 'react-feather'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allapi';


// toastify import code
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// for changing all alert command --> go to edit option select replace option change the alert to toast

// for editing toast --> get the code from the webpage 



function Add({handleRes}) {

  const [uploadData, setuploadData] = useState({


    id: "",
    caption: "",
    thumbnail: "",
    url: ""

  })


  const setInput = (e) => {

    const { name, value } = e.target
    setuploadData({ ...uploadData, [name]: value })


  }
  console.log(uploadData)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // original url    https://www.youtube.com/watch?v=5V04DETPF0o

  //embed url=> https://www.youtube.com/embed/5V04DETPF0o   ==> 

  // extracting code from original youtube url  and update the value of url in setuploadData state
  const extractUrl = (e) => {

    let youtubeUrl = e.target.value
    if (youtubeUrl.includes("v=")) {

      let index = youtubeUrl.indexOf("v=");
      console.log(index)
      let videoUrl = youtubeUrl.substring(index + 2, index + 13)
      console.log(videoUrl);

      let videoData = uploadData
      videoData.url = `https://www.youtube.com/embed/${videoUrl}`
      setuploadData(videoData)


    }
    console.log(uploadData);

  }

  // define handleAdd function

  const handleAdd = async () => {
    // destructure uploadeData state

    const { id, caption, thumbnail, url } = uploadData

    if (!id || !caption || !thumbnail || !url) {

      toast.warn("fill the values", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    // make an api call if al the values is entered in to the form to store the data in backend


    else {


      const response = await addVideo(uploadData)

      // console.log(response)
      if (response.status >= 200 && response.status < 300) {

        handleRes(response.data)
        
        toast.success("new video added successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        setShow(false)
      }
      else {
        toast.warn("provide a unique id", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }





    }


  }






  return (
    <>
      <div onClick={handleShow}>
        <PlusCircle color='blue' size={50} />




      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Id">
              <Form.Control type="text" placeholder="Video Id" name='id' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading Video Caption">
              <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading Video Cover Image URL">
              <Form.Control type="text" placeholder="Video Cover Image URl" name='thumbnail' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingLink" label="Uploading Video Link">
              <Form.Control type="text" placeholder="Video Link" name='url' onChange={extractUrl} />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  )
}

export default Add