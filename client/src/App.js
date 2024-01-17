import logo from './logo.svg';
import './App.css';
import { useWhisper } from '@chengsokdara/use-whisper'
import React, { useState, useEffect } from "react";
import ChatPage from './Components/ChatPage';

// import OPENAI_API_KEY from '../.env'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// console.log(process.env.REACT_APP_OPENAI_API_KEY);
  const OPENAI_API_TOKEN = process.env.REACT_APP_OPENAI_API_KEY
  // const OPENAI_API_TOKEN = "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"

  const [answer, setAnswer] = useState("")
  const [submittedText, setSubmittedText] = useState("")
  const [answers, setAnswers] = useState([])
  const [transcripts, setTranscripts] = useState([])

  // const testScript = "Hello, nice to meet you! I come from a background in biology."

  function onFormSubmit() {
    // event.preventDefault();
    stopRecording();

    fetch('http://localhost:5555/app', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: transcript.text
      })
    })
      .then(async (res) => {
        if (res.ok) {
          let newAnswer = await res.text()
          setAnswer(newAnswer)
          setAnswers([...answers, newAnswer])
          // res.json().then(newAnswer => {
          //   setAnswer(newAnswer);
          //   console.log(answer)
          // event.target.reset();
        }
      }
      )
    let newTranscript = transcript.text
    setTranscripts([...transcripts, newTranscript])
  }

  // if (document.getElementById("submittedText") != "") {
  //   submittedText = document.getElementById("submittedText")
  // }
  // else {
  //   submittedText = ""
  // }

  console.log(submittedText)

  function textChange(e) {
    setSubmittedText(e.target.value)
  }

  function onTextSubmit() {
    fetch('http://localhost:5555/app', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: submittedText
      })
    })
      .then(async (res) => {
        if (res.ok) {
          let newAnswer = await res.text()
          setAnswer(newAnswer)
          setAnswers([...answers, newAnswer])
          // res.json().then(newAnswer => {
          //   setAnswer(newAnswer);
          //   console.log(answer)
          // event.target.reset();
        }
      }
      )
  }

  // console.log(answer)
  // console.log(transcript.text)




  const {
    recording,
    speaking,
    transcript,
    transcripting,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    apiKey: OPENAI_API_TOKEN,
    streaming: true,
    timeSlice: 1_000,
    whisperConfig: {
      language: 'en',
    }
    // apiKey: env.process.OPENAI_API_KEY, // YOUR_OPEN_AI_TOKEN
  })

  return (
    // <div>
    //   <p>Recording: {recording}</p>
    //   <p>Speaking: {speaking}</p>
    //   <p>Transcripting: {transcripting}</p>
    //   <p>Transcribed Text: {transcript.text}</p>
    //   <p>Answer: {answer}</p>
    //   <button onClick={() => startRecording()}>Start</button>
    //   <button onClick={() => pauseRecording()}>Pause</button>
    //   <button onClick={() => onFormSubmit()}>Stop</button>
    // </div>
    <div>
      <ChatPage transcript={transcript} answer={answer} answers={answers} startRecording={startRecording} pauseRecording={pauseRecording} onFormSubmit={onFormSubmit} onTextSubmit={onTextSubmit} textChange={textChange} />
    </div>
  )
}

export default App;
