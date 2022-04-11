import React, { useState } from 'react'
import { Form, Modal, Button } from "react-bootstrap"
import { bookService } from '../services/bookService'



function AddFormModal ({onRender}){

    const [show, setShow] = useState(false)
    const handleClose=()=>setShow(false)
    const handleShow = ()=> setShow(true)
    const {renderFix, setRenderFix} = onRender;

    function createBook(event){
        event.preventDefault();
        const book = {
                    name : event.target[0].value,
                    code : event.target[1].value, 
                    price : event.target[2].value, 
                    author : event.target[3].value, 
                    ISBN : event.target[4].value, 
                    publisher : event.target[5].value, 
                    published_date : event.target[6].value
                }
        bookService.addBook(book)
        .then(response => response.json())
        .then(data => { if(data.success)
                             {
                                 alert( book.name +" added!")
                                 handleClose()
                            }
                        else { alert(data.error.message) }    
                     }                  
            )
        .catch(err => console.log(err))
        .finally(()=> setRenderFix(!renderFix))
    }


    return (
        <>
            <Button className="color" variant="primary" onClick={handleShow}>
                 + Add Book
            </Button>
            <Modal 
             show = {show}
             onHide = {handleClose}
             keyboard
             centered
            >
            <Modal.Header closeButton>
                 <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={createBook}>
                        <Form.Group  className="form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Name"  required/>
                            <Form.Label for="floatingInput">Name</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-2" >
                            <Form.Control type="text" id="floatingInput" placeholder="code"  required/>
                            <Form.Label for="floatingInput">Code</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-2" >
                            <Form.Control type="text" id="floatingInput" placeholder="Price"  required/>
                            <Form.Label for="floatingInput">Price</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Author"  required/>
                            <Form.Label for="floatingInput">Author</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="ISBN (10 digits)"  required pattern={"d\{10}"}/>
                            <Form.Label for="floatingInput">ISBN (10 digits)</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Publisher"  required/>
                            <Form.Label for="floatingInput">Publisher</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-2">
                            <Form.Control type="date" id="floatingInput" placeholder="Published on"  required/>
                            <Form.Label for="floatingInput">Published on</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="submit"/>
                        </Form.Group>
                </Form>
            </Modal.Body>
                
            </Modal>
        </>
    )
}


export default AddFormModal;

