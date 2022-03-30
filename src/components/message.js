import React, { Component } from "react";


class Message extends Component{
    

    render(){
        return (
            <>
                <ul>
                    {this.props.message.map((item)=>{
                        return(
                            <li>
                            <div>{item.senderId}</div>
                            <div>{item.text}</div>
                        </li>
                        )
                        
                    })}
                </ul>
            </>
        )
    }
}

export default Message