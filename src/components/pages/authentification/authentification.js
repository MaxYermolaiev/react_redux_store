import React,{useState,useContext,useEffect} from 'react'
import './authentification.css'
//import Wrapper from '../../../utilites/HOC'
import {AplicationDefaultContext} from '../../../service/supply'
let Authentification = ()=>{
    let [forms, setForms]=useState({email:'',password:''})
    let eventHandler=(e)=>{
        setForms({...forms,[e.target.type]:e.target.value})
    }
    let auth = useContext(AplicationDefaultContext)
    let onRegistartion=(e)=> {
        e.preventDefault();
        if (forms.email === '' || forms.password === '') {
            console.log("some field is empty");
            return;
        }
        try{
            auth.register()
        }catch(e){
            console.log(e.message)
        }


    }
    let onLogin=(e)=> {
        e.preventDefault();
        if (forms.email === '' || forms.password === '') {
            console.log("some field is empty");
            return;
        }

        try{
            auth.login()
        }catch(e){
            console.log(e.message)
        }
    }

    return(
        <form>
            <fieldset>
                <legend>To continue your procurements please login
                </legend>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={eventHandler}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={eventHandler}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={onRegistartion}>Registartion</button>
                <button type="submit" className="btn btn-primary" onClick={onLogin}>Login</button>
            </fieldset>
        </form>

    )
}
export default Authentification