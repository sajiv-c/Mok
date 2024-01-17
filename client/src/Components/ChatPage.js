import React from "react";
import Messages from "./Messages";
import InputForm from "./InputForm";

const ChatPage = ({ transcript, answer, startRecording, pauseRecording, onFormSubmit, onTextSubmit, textChange }) => {

    return (
        <div class="flex w-full max-w-xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl">
            <Messages transcript={transcript} answer={answer} />
            <InputForm transcript={transcript} startRecording={startRecording} pauseRecording={pauseRecording} onFormSubmit={onFormSubmit} onTextSubmit={onTextSubmit} textChange={textChange} />
        </div>
    )

}

export default ChatPage