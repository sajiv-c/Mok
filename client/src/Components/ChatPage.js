import React from "react";
import Messages from "./Messages";
import InputForm from "./InputForm";

const ChatPage = ({ transcript, transcripts, answer, answers, startRecording, pauseRecording, onFormSubmit, onTextSubmit, textChange }) => {
// const ChatPage = ({ transcript, answer, responses, startRecording, pauseRecording, onFormSubmit, onTextSubmit, textChange }) => {

    return (
        <div class="flex w-full max-w-xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl" style={{"borderStyle": "solid", "borderWidth": "3px", "borderColor": "#6b7280"}}>
            {/* <Messages transcript={transcript} transcripts={transcripts} answer={answer} answers={answers} /> */}
            <Messages transcript={transcript} answer={answer} />
            <InputForm transcript={transcript} startRecording={startRecording} pauseRecording={pauseRecording} onFormSubmit={onFormSubmit} onTextSubmit={onTextSubmit} textChange={textChange} />
        </div>
    )

}

export default ChatPage