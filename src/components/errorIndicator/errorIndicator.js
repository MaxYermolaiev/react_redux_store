import './errorIndicator.css';
import React from 'react';
import ico from'./err.png'
let ErrorIndicator = () =>{

    return(<div className='error'>
        <img src={ico} width={'100px'}/>
        <span><h2>Soms teriible occuered</h2></span>
        </div>)
}
export default ErrorIndicator