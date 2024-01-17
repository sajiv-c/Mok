import React from "react";

const UserMessage = ({ transcript }) => {

    return (
        <div class="ml-auto mt-2 flex w-full max-w-xs justify-end space-x-3">
            <div>
                <div class="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                    <p class="text-sm">{transcript.text}</p>
                </div>
            </div>
            <div class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
        </div>
    )

}

export default UserMessage