import React from 'react'
import Search from '../search/Search'
import Book from '../book/Book'

class Add extends React.Component{

    state ={
        searchResults: []
    };

    returnResults = (results) =>{
        if(results) this.setState({searchResults: results})
        console.log(this.state)
    };

    render(){
        return(
            <div className="search-books">
                <Search onSearch={this.returnResults}/>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults.length ? this.state.searchResults.map((book)=>(
                            <li key={book.id}>
                                <Book info={book} update={this.props.updateShelf}/>
                            </li>
                        )) : <li>No Results Found</li>}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Add