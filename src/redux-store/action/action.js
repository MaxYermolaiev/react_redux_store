
let BookRequested = ()=>{
    return{
        type:'FETCH_BOOK_REQUEST',
    }
}
let BookLoad = (newBooks)=>{
    return{
        type:'FETCH_BOOK_LOAD',
        payload:newBooks
    }
}
let Book_error = (typeErr)=>{
    return{
        type:'FETCH_BOOKS_FAILURE',
        payload:typeErr
    }
}
let onIncrease = (id) => {
    return{type:'ADD_ONE_BOOK',payload:id}
}
let onDecrease = (id) => {return{type:'DELETE_ONE_BOOK',payload:id}}
let onRemove = (id) => {return{type: 'REMOVE_BOOKS' ,payload:id}}
let BookAddedToCard=(id)=>{
    return {
        type:"BOOK_DISPATCH_TO_CARD",
        payload:id
    }
}
let fetchBooks=(BookService,dispatch)=>()=> {
    dispatch(BookRequested())
    BookService.getBooks()
        .then((data) => {
            dispatch(BookLoad(data))
        })
        .catch((err) => {
            dispatch(Book_error(err))
        })
}



    export {fetchBooks,onIncrease,onRemove,onDecrease,BookAddedToCard}