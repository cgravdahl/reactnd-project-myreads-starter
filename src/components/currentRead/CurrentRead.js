import React from 'react'
import Book from '../book/Book'

class CurrentRead extends React.Component{

    render(){
        const {books,update} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=>(
                            <li key={book.id}>
                                <Book info={book} update={update}/>
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentRead