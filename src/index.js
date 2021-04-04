import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App/App";
import ErrorBoundary from './components/errorBoundary'
import {Provider} from "react-redux";
import store from "./redux-store/srtore/store";
import {AplicationDefaultContext} from './service/supply'
import BookService from './service/bookstore'
import {BrowserRouter} from "react-router-dom";

const bookService = new BookService();
const defaultItem={

    bookService:bookService,
        token:null,
        userId:null,
        login:null,
        register:null,
        logout:null,
        isAuthentificated:null
}
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <AplicationDefaultContext.Provider value={defaultItem}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AplicationDefaultContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
