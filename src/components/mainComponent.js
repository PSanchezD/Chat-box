import { Component } from "react";
import Nav from './navComponent'
import Chat from './chat'


class Main extends Component{
    constructor(props){
        super(props);
        this.state= {}
    }

    render(){
        return(
            <>
                <Nav/>
                <Chat/>
            </>
        )
    }
}

export default Main