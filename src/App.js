import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Add from './components/add/Add'
import WantRead from './components/wantRead/WantRead'
import CurrentRead from './components/currentRead/CurrentRead'
import Read from './components/read/Read'
import './App.css'

class BooksApp extends React.Component {
    state = {
        currentBooks: [],
        wantBooks: [],
        readBooks: []
    };
    componentDidMount() {
        BooksAPI.getAll().then((book) => {
            this.setState((state) =>{
                state.currentBooks = book.filter(x => x.shelf === 'currentlyReading');
                state.wantBooks = book.filter(x => x.shelf === 'wantToRead');
                state.readBooks = book.filter(x => x.shelf === 'read');
            });
            console.log(this.state)
        })
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">

                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <CurrentRead books={this.state.currentBooks}/>
                                <WantRead books={this.state.wantBooks}/>
                                 <Read books={this.state.readBooks}/>
                                </div>
                            </div>
                        <div className="open-search">
                            <Link to='/add'>Add a book</Link>
                        </div>
                    </div>
                )}/>
                <Route path='/add' render={() => (
                    <Add/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
