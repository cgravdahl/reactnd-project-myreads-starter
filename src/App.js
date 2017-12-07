import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Add from './components/add/Add'
import Shelf from './components/shelf/Shelf'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((book) => {
            this.setState((state) => {
                state.books = book
            });
        })
    }

    updateShelf(book,shelf){
        BooksAPI.update(book,shelf).then(() => {
            BooksAPI.getAll().then((book) => {
                this.setState((state) => {
                    state.books = book
                });
            })
        })
    }

    render() {
        this.updateShelf = this.updateShelf.bind(this);
        const {books} = this.state;
        const filter = books => shelf => books.filter(b => b.shelf === shelf);
        const filterBooksBy = filter(books);
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">

                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Shelf
                                    title='Currently Reading'
                                    update={this.updateShelf}
                                    books={filterBooksBy('currentlyReading')}
                                />
                                <Shelf
                                    title='Want to Read'
                                    update={this.updateShelf}
                                    books={filterBooksBy('wantToRead')}
                                />
                                <Shelf
                                    title='Read'
                                    update={this.updateShelf}
                                    books={filterBooksBy('read')}
                                />
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                        </div>
                    </div>
                )}/>
                <Route path='/search' render={({history}) => (
                    <Add
                        book={books}
                        updateShelf={(book,shelf)=>{
                            this.updateShelf(book,shelf)
                        }}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
