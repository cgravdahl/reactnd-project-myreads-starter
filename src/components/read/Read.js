import React from 'react'
import Book from '../book/Book'

class Read extends React.Component{

    render(){
        const {books} = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book)=>(
                            <li key={book.id}>
                                <Book info={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Read