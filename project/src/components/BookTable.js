import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { bookService }  from '../services/bookService'
import FormModal from './FormModal'

export default function BookTable() {

    const [books, setBooks] = useState([])


    useEffect(()=>{
        bookService.get_books()
        .then(response => response.json())
        .then(data => setBooks(data.data))
        .catch(err => alert(err))
    }, [])

  
  //Hanlde add book
    const [addFormVisible,setAddForm] =  useState(false)
    const handleAddBook=()=>{
      setAddForm(true)
    }
    //close Modal
    const handleClose = () =>{
        setAddForm(false)
    }

    return (
    <div className='table-container'>
        <Table className='mt-5' hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Price</th>
                    <th>Authors</th>
                    <th>ISBN</th>
                    <th>Published</th>
                    <th>Published On</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map(book =>
                        <tr key={book._id}>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td>{book.name}</td>
                            <td><button>a</button></td>
                        </tr>
                        )
                }
            </tbody>
        </Table>

        <Button onClick={handleAddBook} > <span className='font-weight-bold'>+</span> Add book</Button>

        <FormModal visible={addFormVisible}  handleClose ={handleClose}/>

    </div>
  )
}
