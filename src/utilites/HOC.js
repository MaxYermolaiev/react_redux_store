import React from 'react';
import {AplicationDefaultContext} from '../service/supply'

let Wrapper = ()=>(Wrapped)=>{
    return (props)=>{
        return(
            <AplicationDefaultContext.Consumer>
                {(defaultItem)=>{
                    let temp = Object.create(defaultItem);delete temp.bookService
                  return <Wrapped {...props} {...defaultItem} MethodSupply={defaultItem.bookService}/>
                }
                }
            </AplicationDefaultContext.Consumer>
        )
    }

}
export default Wrapper;