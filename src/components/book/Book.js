import React from 'react'

class Book extends React.Component{


    render(){
        const {info} = this.props;
        console.log(info);
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193,
                        backgroundImage:`url(${info.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{info.title}</div>
                {info.authors.map((author)=>(
                    <div key={author} className="book-authors">{author}</div>
                ))}

            </div>
        )
    }
}

export default Book