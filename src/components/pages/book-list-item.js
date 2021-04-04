import React,{Fragment} from 'react'
import './BookListItem.css'

let BookListItem =({book,onAddedToCard})=>{
    let {id,title,author,priece,url} = book;
     priece = priece||'undefined'
    return(<Fragment>
        <div className='book-list-item'>
            <div className='book-cover'>
                <img alt={id} src={url}/>
            </div>
            <div className='book-details'>
                <a href='#' className='book-title'>{`Description: ${title}`}</a>
                <div className='book-author'>{`Writed by: ${author}`}</div>
                <div className='book-priece'>{`Priece: ${priece}`}</div>
                <button onClick={onAddedToCard} className='btn btn-info add-to-card'>Add to card</button>
            </div>
        </div>
    </Fragment>)
}

export default BookListItem;

