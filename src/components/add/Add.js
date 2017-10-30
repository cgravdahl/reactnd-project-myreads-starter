import React from 'react'
import Search from '../search/Search'

class Add extends React.Component{

    render(){
        return(
            <div className="search-books">
                <Search/>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default Add