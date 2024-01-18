import React from "react";
import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

const Messages = ({ transcript, answer }) => {
// const Messages = ({ responses }) => {

    // responses.map(response => {

    //     if (response.sender == "user") {
    //         return (
    //             <UserMessage transcript={response.message} />
    //         )
    //     }
    //     else {
    //         return (
    //             <AIMessage answer={response.message} />
    //         )
    //     }

    // })

    return (
        <div class="flex h-0 flex-1 flex-col overflow-auto p-4">
            {/* {transcripts.map((transcript) => (
                <UserMessage transcript={transcript} />
            ))}
            {answers.map((answer) => (
                <AIMessage answer={answer} />
            ))} */}
            <UserMessage transcript={transcript}/>
            <AIMessage answer={answer} />
        </div>

        // <div class="flex h-0 flex-1 flex-col overflow-auto p-4">
        //     {responses.map((response) => (
        //         response.sender == "user"
        //             ? (<UserMessage transcript={response.message} />)
        //             : (<AIMessage answer={response.message}/>)
        //     ))}
        // </div>

    )

}

export default Messages