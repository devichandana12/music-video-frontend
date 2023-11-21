import React from 'react';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addWatchHistory, deleteVideo } from '../services/allapi';
import { v4 as uuidv4 } from 'uuid';


// destructure



function Videocard({ card, handleDeleteStatus, insideCategory }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    // fo getting data from backend
    const handleShow = async () => {
        setShow(true);


        // to gernerating id automatically  -> npm i uuidv4 install

        const uid = uuidv4()

        console.log(uid);


        //  to generate system data and time
        let cardTime = new Date()
        console.log(cardTime)


        //  to get caption and url from video card
        // desturcture   current its object type

        const { caption, url } = card


        if (uid != "", caption != "", url != "", cardTime != "") {

            const body = {
                id: uid, cardName: caption, url: url, date: cardTime
            }
            const response = await addWatchHistory(body)
            console.log(response);

        }



    }

    // function definition

    const removeItem = async (id) => {
        // api call to delete cards
        let response = await deleteVideo(id)
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
            handleDeleteStatus(true)
        }
    }


    // drag function

    const dragstart = (e, id) => {
        console.log("drag started & card id " + id);
        e.dataTransfer.setData("cardid", id)
    }

    return (

        <>
            <div>
                <Card className='shadow' draggable onDragStart={e => dragstart(e, card?.id)}>
                    <Card.Img onClick={handleShow} variant="top" height={"200px"} src={card?.thumbnail} />
                    <Card.Body>
                        <Card.Title>

                            <span>
                                {card?.caption}
                            </span>
                            {
                                insideCategory ? "" : <Trash2 color='red' style={{ float: 'right' }} onClick={() => removeItem(card?.id)} />
                            }
                        </Card.Title>

                    </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Video Caption</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <iframe width={'100%'} height={'300px'} src={`${card?.url}?autoplay=1`} title="Sanam Teri Kasam (Title Song) | Full Audio | Harshvardhan, Mawra | Himesh Reshammiya, Ankit Tiwari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </Modal.Body>

                </Modal>
            </div>
        </>
    )
}

export default Videocard