import React from 'react'
import {Link} from 'react-router-dom'
import {Debounce} from 'react-throttle';
import * as BooksAPI from '../../BooksAPI'

class Search extends React.Component {

    state = {
        searchTerms: ''
    };

    updateSearch = (term) => {
        if(term === '') this.props.onSearch('');
        this.setState({searchTerms: term.trim()})
        BooksAPI.search(this.state.searchTerms, 20).then((books) => {
            if (books !== undefined && !books.error ) {
                let matchedBooks = books.map(x => {
                    let match = this.props.userBooks.filter(y => y.title === x.title);
                    if (match.length > 0) {
                        x.shelf = match[0].shelf
                    }
                    return x
                });
                this.props.onSearch(matchedBooks)
            }else{
                this.props.onSearch(books = [])
            }
        })
            .catch(this.props.onSearch(''));
    };

    clearSearch = () => {
        this.setState({term: ''})
    };

    render() {
        const {terms} = this.state
        return (
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <Debounce time="400" handler="onChange">
                        <input type="text" placeholder="Search by title or author"
                               value={terms}
                               onChange={(event) => this.updateSearch(event.target.value)}
                        />
                    </Debounce>
                </div>
            </div>
        )
    }
}

export default Search