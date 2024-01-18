import React from "react";

const InputForm = ({ transcript, startRecording, pauseRecording, onFormSubmit, onTextSubmit, textChange }) => {

    return (
        <div class="bg-gray-300 p-4">
            <input onChange={textChange} id="submittedText" class="flex h-10 w-full items-center rounded px-3 text-sm" type="text" placeholder="Type your message…" />
            <br/>
            <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "medium", "paddingLeft": "1.5em", "paddingRight": "1.5em"}}>
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded" onClick={() => startRecording()}>Start Recording</button>
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded"onClick={() => pauseRecording()}>Pause</button>
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded"onClick={() => onFormSubmit()}>Stop/Send Recording</button>
                <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded"onClick={() => onTextSubmit()}>Send Text</button>
            </div>
        </div>
    )

}

export default InputForm