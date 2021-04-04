let initialState = {
    books:[],
    loading:true,
    errors:null,
    cardtItem:[],
    grandTotal:{items:0,total:0}
}

let updateGrandTotal=(cardtItem)=>{
    if (cardtItem.length===0)return { items:0, total:0}
    let result = 0;cardtItem.forEach(item=>result+=item.total)
    return { total:result, numberItems:cardtItem.length}
}
let updateCartItems = (cartItems, newItem, index)=>{
if(index===-1){return [...cartItems,newItem]}
return [...cartItems.slice(0,index),newItem,...cartItems.slice(index+1)]
}
let createNewItem=(cartItems,item,index)=>{
    let temp;
    if(index===-1) {
        temp={id:item.id,
            name:item.title,
            count:1,pricePerOne:item.priece,
            total:item.priece}}else{
         temp ={
             ...cartItems[index],
             count:cartItems[index].count+1,
             total:cartItems[index].total+item.priece
         }
    }
    return temp;
}
let leftBarAction=(myAction,position,carditem)=>{
let tempSecond;
    if(myAction==='ADD_ONE_BOOK'){
        tempSecond = carditem.map((item,index)=>{
            if(index===position){
                return {...item,count:item.count+1,total:item.pricePerOne+item.total}
            }
            return item;
        })
        return tempSecond;
    }
    if(myAction==='DELETE_ONE_BOOK'){
                if(carditem.count===1){
           return [
               ...carditem.slice(0,position),
               ...carditem.slice(position+1)
                  ]
        }
        return [ ...carditem.slice(0,position),
            {...carditem[position],
                count:carditem[position].count-1,
                total:carditem[position].total -carditem[position].pricePerOne},
            ...carditem.slice(position+1)]
    }
}
const reduser = ( state=initialState,action)=>{
          switch (action.type) {
              case('FETCH_BOOK_LOAD'):return {...state,books: action.payload, loading:false, errors:null}
              case('FETCH_BOOK_REQUEST'):return {...state,books: [], loading:true, errors:null}
              case('FETCH_BOOKS_FAILURE'):return {...state,books: [], loading:false, errors:action.payload}
              case('REMOVE_BOOK'):return {...state,books: [], loading:false, errors:action.payload}
              case('BOOK_DISPATCH_TO_CARD'): {
                  let id = action.payload;
                  let item = state.books.find(book=>book.id===id)
                  let index = state.cardtItem.findIndex(book=>book.id===id)
                  let newItem = createNewItem(state.cardtItem,item,index);
                  let temp = {...state,cardtItem:updateCartItems(state.cardtItem,newItem,index)}
                  let a = updateGrandTotal(temp.cardtItem);temp.grandTotal=a;
                  return temp;
                  }
              case ('ADD_ONE_BOOK'): {
                  let myId = action.payload;
                  let position = state.cardtItem.findIndex(book=>book.id===myId)
                  let temp = {...state,cardtItem:leftBarAction(action.type,position,state.cardtItem)}
                  let a = updateGrandTotal(temp.cardtItem);temp.grandTotal=a;
                  return temp;
              }
              case ('DELETE_ONE_BOOK'):{
                  let myId = action.payload;
                  let position = state.cardtItem.findIndex(book=>book.id===myId)
                  let temp;
                  if (state.cardtItem[position].count===1) {temp= {...state,
                      cardtItem:[
                          ...state.cardtItem.slice(0,position),
                          ...state.cardtItem.slice(position+1)
                      ]}}
                  temp= {...state,cardtItem:leftBarAction(action.type,position,state.cardtItem)}
                  let a = updateGrandTotal(temp.cardtItem);temp.grandTotal=a;
                  return temp

              }
              case ('REMOVE_BOOKS'):{
                  let myId = action.payload;
                  let position = state.cardtItem.findIndex(book=>book.id===myId);
                  let temp = {...state,
                      cardtItem:[
                          ...state.cardtItem.slice(0,position),
                          ...state.cardtItem.slice(position+1)
              ],
                  }
                  let a = updateGrandTotal(temp.cardtItem);temp.grandTotal=a;
                  return temp;
              }
              default:return state;
          }
}
export default reduser
//id:1,title:'kamasutra',author:'Yermolaiev M',priece:2332, url: '