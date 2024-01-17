import React from "react";

const InputForm = ({ transcript, startRecording, pauseRecording, onFormSubmit, onTextSubmit, textChange }) => {

    return (
        <div class="bg-gray-300 p-4">
            <input onChange={textChange} id="submittedText" class="flex h-10 w-full items-center rounded px-3 text-sm" type="text" placeholder="Type your message…" />
            <button onClick={() => startRecording()}>Start</button>
            <button onClick={() => pauseRecording()}>Pause</button>
            <button onClick={() => onFormSubmit()}>Stop and Send Recording</button>
            <button onClick={() => onTextSubmit()}>Send Text</button>
        </div>
    )

}

export default InputForm