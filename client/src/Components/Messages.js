import React from "react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

const Messages = ({ transcript, answer }) => {

    return (
        <div class="flex h-0 flex-1 flex-col overflow-auto p-4">
            <AIMessage answer={answer} />
            <UserMessage transcript={transcript}/>
        </div>
    )

}

export default Messages