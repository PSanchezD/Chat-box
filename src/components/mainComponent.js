import { Component } from "react";
import Nav from './navComponent'
import Title from './title'
import Message from './message'
import Send from './send'
import { DUMMY } from '../Data_file/dummy'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            message: DUMMY

        }
    }

    render(){
        return(
            <>
                <Nav/>
                <Title/>
                <Message message={this.state.message}/>
                <Send/>
            </>
        )
    }
}

export default Main