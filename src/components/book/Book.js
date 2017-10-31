import React from 'react'
import ReactTooltip from 'react-tooltip'

class Book extends React.Component {


    render() {
        const {info} = this.props;
        const {description,authors} = info;
        let trimmedDesc;
        let descriptLength = 250;
        if(info.description) {
            trimmedDesc = description.length > descriptLength ?
                description.substring(0, descriptLength - 3) + "..." :
                description;
        }
        if(!description)
        console.log(info);
        return (
            <div className="book">
                <div className="book-top">
                    <div data-tip data-for={info.id} className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: `url(${info.imageLinks ? info.imageLinks.thumbnail
                            : ''})`
                    }}></div>
                    <ReactTooltip id={info.id} class='hoverClass' delayHide={150}
                                  effect='solid' aria-haspopup='true'
                                  role='example'>
                        <h3>{info.title}</h3>
                        <h4>{info.subtitle}</h4>
                        <p>{trimmedDesc}</p>
                        <a href={info.infoLink}>Check out in Google Store</a>
                        <ul>
                            <li>Publish Date: {info.publishedDate}</li>
                            <li>Page Count: {info.pageCount}</li>
                            <li>Authors:</li>
                            <ul>
                                {info.authors ? authors.map((author) => (
                                    <li key={author}>{author}</li>
                                )) : []}
                            </ul>
                        </ul>
                    </ReactTooltip>
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
                {info.authors ? authors.map((author) => (
                    <div key={author} className="book-authors">{author}</div>
                )) : []}

            </div>
        )
    }
}

export default Book