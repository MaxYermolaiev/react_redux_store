import './App.css'
import React from 'react'
import Wrapper from '../../utilites/HOC'
import {Home,Card,Header} from '../pages'
import Authentification from '../pages/authentification'
import {Redirect, Route, Switch} from "react-router-dom";
import ShoppingCartTable from '../pages/shopping-cart-table'
import errorBoundary from '../errorBoundary'
//
//
let App = (props)=>{

    return(
        <main role='main' className='container'>
            <Header {...props}/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Card" exact component={Card}/>
            <Route path="/Auth" exact component={Authentification}/>
            <Redirect to='/'/>
        </Switch>
            <errorBoundary>
            <ShoppingCartTable/>
            </errorBoundary>
        </main>

   )
}
export default Wrapper()(App)