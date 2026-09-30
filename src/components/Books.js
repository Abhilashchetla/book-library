import React,{useContext} from "react";
import {Bookscontext} from '../Bookscontext';

export default function Books(){
    const books=useContext(Bookscontext)

    return(
        <div>
            <h1>All books</h1>
            <ul>
                {
                    books.map(book=>(
                        <li key={book.id}>{book.title} by {book.author}</li>
                    ))
                }
            </ul>
        </div>

    )
}