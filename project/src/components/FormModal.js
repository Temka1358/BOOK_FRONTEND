import React, { useState } from 'react'
import { Form, Modal } from "react-bootstrap"
import { bookService } from '../services/bookService'



function FormModal ({visible, handleClose}){

    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [price, setPrice] = useState("")
    const [author, setAuthor] = useState("")
    const [ISBN, setISBN] = useState(0)
    const [publisher, setPublisher] = useState("")
    const [published_date, setPublishedDate] = useState()


    function createBook(){
        const book = {name, code, price, author, ISBN, publisher, published_date}
        bookService.addBook(book)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter'){
            createBook()
            handleClose()
        }
    })
    

    return (
        <>
            <Modal 
             show = {visible}
             onHide = {handleClose}
             keyboard
             centered
            >
            <Modal.Header closeButton>
                <h2>Add book</h2>
            </Modal.Header>
            <Modal.Body>
                <Form >
                        <Form.Group  className="form-floating mb-1">
                            <Form.Control type="text" id="floatingInput" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
                            <Form.Label for="floatingInput">Name</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-1" >
                            <Form.Control type="text" id="floatingInput" placeholder="code" onChange={e => setCode(e.target.value)}/>
                            <Form.Label for="floatingInput">Code</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-3" >
                            <Form.Control type="text" id="floatingInput" placeholder="Price" onChange={e => setPrice(e.target.value)}/>
                            <Form.Label for="floatingInput">Price</Form.Label>
                        </Form.Group>
                        <Form.Group  className="form-floating mb-3">
                            <Form.Control type="text" id="floatingInput" placeholder="Author" onChange={e => setAuthor(e.target.value)}/>
                            <Form.Label for="floatingInput">Author</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-3">
                            <Form.Control type="text" id="floatingInput" placeholder="ISBN" onChange={e => setISBN(e.target.value)}/>
                            <Form.Label for="floatingInput">Name</Form.Label>
                        </Form.Group>
                        <Form.Group className=" form-floating mb-3">
                            <Form.Control type="text" id="floatingInput" placeholder="Publisher" onChange={e => setPublisher(e.target.value)}/>
                            <Form.Label for="floatingInput">Publisher</Form.Label>
                        </Form.Group>
                        <Form.Group  className=" form-floating mb-3">
                            <Form.Control type="date" id="floatingInput" placeholder="Published on" onChange={e => setPublishedDate(e.target.value)}/>
                            <Form.Label for="floatingInput">Published on</Form.Label>
                        </Form.Group>
                    
                
                </Form>
            </Modal.Body>
                
            </Modal>
        </>
    )
}


export default FormModal;

