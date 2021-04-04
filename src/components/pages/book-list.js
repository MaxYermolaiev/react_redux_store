import React, {Component} from 'react'
import './BookList.css'
import BookListItem from "./book-list-item";
import {connect} from 'react-redux'
import Wrapper from '../../utilites/HOC'
import {fetchBooks,BookAddedToCard} from '../../redux-store/action/action'
import compose from "../../utilites/compose";
import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator";
//______________________________

const BookList = ({books, onAddedToCard}) => {
    return (<ul className='book-list'>
        {books.map((book) => {
            return (
                <li key={book.id}>
                    <BookListItem book={book} onAddedToCard={()=>onAddedToCard(book.id)}/>
                </li>
            )
        })}
    </ul>)
}
//______________________________
class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
        /* old aproach
        let {BookRequested,MethodSupply:BookService, BookLoad,Book_error}=this.props;//get ReactConsumer servise to dowland data and "BookLoad" to push in redux store
    BookRequested()
    BookService.getBooks()
        .then((data)=>{BookLoad(data)})
        .catch((err)=>{Book_error(err)})
        */
    }

    render() {
        let {books, loading, errors, onAddedToCard} = this.props;

        if (errors) return <ErrorIndicator/>
        if (loading) return (<Spinner/>)
        return <BookList books={books} onAddedToCard={onAddedToCard}/>
    }
}
//______________________________
const mapStateToProps = ({books, loading, errors}) => {
    return {books, loading, errors}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    //const mapDispatchToProps = (dispatch, {MethodSupply: BookService}) - shorter
    let {MethodSupply: BookService} = ownProps;
    return {
        fetchBooks: fetchBooks(BookService, dispatch),
        onAddedToCard:(id)=>dispatch(BookAddedToCard(id))
    }
    /* return{fetchBooks:()=> {
             dispatch(BookRequested())
             BookService.getBooks()
                 .then((data)=>{dispatch(BookLoad(data))})
                 .catch((err)=>{dispatch(Book_error(err))})
         }}*/
    //return{fetchBooks:()=>console.log('fetchBooks')}
}

//const mapDispatchToProps = {BookLoad,BookRequested,Book_error}
/*

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}

const mapDispatchToProps = {BookLoad}
const mapDispatchToProps = (dispatch)=>{
    BookLoad
   // return bindActionCreators({BookLoad},dispatch)
  // return {BooksLoad:(newBooks)=>{dispatch(BookLoad(newBooks))}}
}*/


export default compose(Wrapper(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer)
//export default  Wrapper()(connect(mapStateToProps,mapDispatchToProps)(BookList))
