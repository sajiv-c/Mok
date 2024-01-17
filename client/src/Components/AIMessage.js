import React from "react";

const AIMessage = ({ answer }) => {

    return (
        <div class="mt-2 flex w-full max-w-xs space-x-3">
            <div class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
            <div>
                <div class="rounded-r-lg rounded-bl-lg bg-gray-300 p-3">
                    <p class="text-sm">{answer}</p>
                </div>
            </div>
        </div>
    )

}

export default AIMessage