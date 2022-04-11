import React, { useState } from 'react'
import { Form, Modal } from "react-bootstrap"
import { bookService } from '../services/bookService'


export default function EditFormModal({data, onRender}) {

  const [show, setShow] = useState(false)

  const handleClose = ()=> setShow(false)
  const handleShow = () => setShow(true)
  const {renderFix, setRenderFix} = onRender;

  const updateBook = (event)=>{
    event.preventDefault();
    const book = {
      id: data._id,
      name : event.target[0].value,
      code : event.target[1].value, 
      price : event.target[2].value, 
      author : event.target[3].value, 
      ISBN : event.target[4].value, 
      publisher : event.target[5].value, 
      published_date : event.target[6].value
    }
    bookService.update_book(book)
    .then(response => response.json())
    .then(data => { if(data.success)
                         {
                             alert( book.name +" updated!")
                             handleClose()
                        }
                    else { alert(data.error.message)
                         }    
                 }                  
        )
    .catch(err => console.log(err))
    .finally(()=> setRenderFix(!renderFix))
    }

  return (
    <div>
      <div className="edit me-2" onClick={handleShow} >
        <svg
          className="edit"
          width="15"
          height="15"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.89 0.390001L13.6 3.11C14.06 3.57 14.02 4.35 13.63 4.75L5.62 12.77L0.0599976 13.93L1.22 8.35C1.22 8.35 8.82 0.72 9.21 0.32C9.6 -0.0699996 10.43 -0.0699995 10.89 0.390001V0.390001ZM8.16 3.18L2.57 8.79L3.68 9.9L9.22 4.25L8.16 3.18ZM5.19 11.41L10.77 5.81L9.7 4.73L4.11 10.33L5.19 11.41Z"
            fill="black"
            fillOpacity={0.3}
          />
        </svg>
      </div>

      <Modal 
             show = {show}
             onHide = {handleClose}
             centered
            >
            <Modal.Header closeButton>
                 <Modal.Title>Edit Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateBook}>
                        <Form.Group  className="form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Name"  required  defaultValue={data.name}/>
                            <Form.Label for="floatingInput">Name</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-2" >
                            <Form.Control type="text" id="floatingInput" placeholder="code"  required defaultValue={data.code}/>
                            <Form.Label for="floatingInput">Code</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-2" >
                            <Form.Control type="text" id="floatingInput" placeholder="Price"  required defaultValue={data.price}/>
                            <Form.Label for="floatingInput">Price</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Author"  required defaultValue={data.author}/>
                            <Form.Label for="floatingInput">Author</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="ISBN"  required defaultValue={data.ISBN}/>
                            <Form.Label for="floatingInput">ISBN</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-2">
                            <Form.Control type="text" id="floatingInput" placeholder="Publisher"  required defaultValue={data.publisher}/>
                            <Form.Label for="floatingInput">Publisher</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-2">
                            <Form.Control type="date" id="floatingInput" placeholder="Published on"  required defaultValue={data.published_date.slice(0,10)}/>
                            <Form.Label for="floatingInput">Published on</Form.Label>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="submit"/>
                        </Form.Group>
                </Form>
            </Modal.Body>
            </Modal>
      
    </div>
  )
}
