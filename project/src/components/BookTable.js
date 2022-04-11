import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { bookService }  from '../services/bookService'
import AddFormModal from './AddFormModal'
import DeleteFormModal from './DeleteFormModal'
import  EditFormModal  from './EditFormModal'


export default function BookTable() {

    const [books, setBooks] = useState([])
    const [renderFix,setRenderFix]=useState(false)

    useEffect(()=>{
        bookService.get_books()
        .then(response => response.json())
        .then(data => setBooks(data.data))
        .catch(err => alert(err))
    }, [renderFix])

    return (
    <div className='table-container'>
        <Table className='mt-5'
         hover
         striped
         bordered
         size='sm'
         responsive
         >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Price</th>
                    <th>Authors</th>
                    <th>ISBN</th>
                    <th>Publisher</th>
                    <th>Published On</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book, index) =>
                        <tr key={book._id}>
                            <td>{index}</td>
                            <td>{book.name}</td>
                            <td>{book.code}</td>
                            <td>{book.price}</td>
                            <td>{book.author}</td>
                            <td>{book.ISBN}</td>
                            <td>{book.publisher}</td>
                            <td>{book.published_date.slice(0,10)}</td>
                            <td>
                                <span>
                                    <EditFormModal data={book} onRender={{renderFix, setRenderFix}} />
                                </span>
                                <span >
                                     <DeleteFormModal data={book._id} onRender={{renderFix, setRenderFix}}/>
                                </span>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>

        <AddFormModal onRender={{renderFix, setRenderFix}}/>

    </div>
  )
}
