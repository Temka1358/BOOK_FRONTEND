import { backend_server } from '../config'

const get_books = async()=>{
   return await fetch(backend_server + "/books",{
       method: "GET",
       headers: {
           'Content-type': 'application/json'
       }
   })
}

const addBook = async(book)=>{
    return await fetch(backend_server + "/addBook",{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
}


const update_book = async(book)=>{
    return await fetch(backend_server + "/updateBook",{
        method: "PUT",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
}

const delete_book = async (id) => {
    return await fetch(backend_server + "/deleteBook", {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(id)
    })
}


export const bookService = {
    get_books,
    delete_book,
    addBook,
    update_book
}