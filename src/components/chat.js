import React from "react";

import { ChatEngine } from "react-chat-engine";

function Chat(){
    return(
        <ChatEngine
            height='100vh'
            projectID='912c89a4-bf71-460c-a95b-cd8ccb75a04b'
            userName='Admin'
            userSecret='Sec123'
        />
    )
}

export default Chat