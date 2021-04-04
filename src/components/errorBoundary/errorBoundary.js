import React,{Component} from 'react'
import ErrorIndicator from '../errorIndicator'

export default class ErrorBoundary extends Component{
    state={hasError:null}
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError) return <ErrorIndicator/>

        return this.props.children
    }

}