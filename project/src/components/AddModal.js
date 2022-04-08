
import {Button, Form, Modal } from "react-bootstrap"



function AddModal ({visible, onCreate, onCancel}){

    return (
        <>
            <Modal 
                show = {visible}
                onHide = {onCancel}
                //onEnter = {onCreate}
            >
            <Modal.Header closeButton>
                <h2>Add book</h2>
            </Modal.Header>
            <Modal.Body>
                <Form  onSubmit={(e)=>{ e.preventDefault(); console.log(e.target[0].value)}}>
                    <Form.Group controlId="name">
                        <Form.Control type="text" placeholder="Name"/>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Control type="text" placeholder="Price"/>
                    </Form.Group>
                    <Form.Group controlId="ISNB">
                        <Form.Control type="text" placeholder="ISBN"/>
                    </Form.Group>
                    <Form.Group controlId="author">
                        <Form.Control type="text" placeholder="Author"/>
                    </Form.Group>
                    <Form.Group controlId="published_date">
                        <Form.Control type="text" placeholder="Published on"/>
                    </Form.Group>
                    <Button type="submit">button</Button>
                </Form>
            </Modal.Body>
                
            </Modal>
        </>
    )
}


export default AddModal;

