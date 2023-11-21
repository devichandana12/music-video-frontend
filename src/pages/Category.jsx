import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getVideos, getallCategory, updateCategory } from '../services/allapi';




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';
import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';

function Category() {


  const [allCategory, setallCategory] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [categoryItem, setcategoryItem] = useState({
    id: "",
    name: "",
    allVideos: []
  })



  const addCategoryForm = (e) => {
    const { name, value } = e.target
    setcategoryItem({ ...categoryItem, [name]: value })


  }
  console.log(categoryItem);

  const handleAddCategory = async (e) => {
    e.preventDefault()


    const { id, name } = categoryItem
    if (!id || !name) {
      toast.warn("fill the values")

    } else {
      let response = await addCategory(categoryItem)
      console.log(response)

      toast.success("new video added successfully")
      setShow(false)
      getCategoryList()
    }

  }





  // get all category

  const getCategoryList = async () => {
    const response = await getallCategory()
    console.log(response.data)
    setallCategory(response.data)

  }
  console.log(allCategory)

  useEffect(() => {
    getCategoryList()
  }, [])






  const handleDeleteCategory = async (e, id) => {
    e.preventDefault()
    console.log(id);

    await deleteCategory(id)
    getCategoryList()

  }

  const dragover = e => {
    e.preventDefault()
    console.log("dragging over");


  }
  const dropped = async (e, categoryid) => {
    console.log(categoryid)
    let sourceCardId = e.dataTransfer.getData("cardId")
    console.log("source card id", sourceCardId);



    // logic to implement adding card in the given category

    let { data } = await getVideos(sourceCardId)
    console.log("source video data", data);


    let selectedCategory = allCategory.find(item => item.id == categoryid)

    console.log("target category details", selectedCategory);
    selectedCategory.allVideos.push(data)
    await updateCategory(categoryid, selectedCategory)

    getCategoryList()


    console.log(" updated target category details", selectedCategory)
  }





  return (
    <>
      <div className="d-grid">
        <div onClick={handleShow} className="btn btn-dark m-2">
          Add Category

        </div>



        {
          allCategory?.map(item => (
            <div droppable onDragOver={e => dragover(e)}
              onDrop={e => dropped(e, item?.id)}


              className='d-flex justify-content-between border rounded mt-2 p-3'>

              <h4>{item.name}</h4>

              <span onClick={e => handleDeleteCategory(e, item?.id)}><Trash2 color='red' /></span>
              <Row>
                {
                  item?.allVideos.map((card)=>(
                    <Col className='p-3  sm={12}' >
                    <Videocard card={card} insideCategory={true}/>
                    </Col>

                ))}
              </Row>



            </div>
          ))
        }

      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <FloatingLabel className='mb-3' controlId="floatingLink" label="Id">
            <Form.Control type="text" placeholder="Id" name='id' onChange={addCategoryForm} />
          </FloatingLabel>

          <FloatingLabel className='mb-3' controlId="floatingCaption" label="Category">
            <Form.Control type="text" placeholder="Category" name='name' onChange={addCategoryForm} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
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

export default Category