# from flask import Flask, request, jsonify
# from openai import OpenAI

# client = OpenAI(api_key='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')

# app = Flask(__name__)

# @app.route('/chat', methods=['POST'])
# def chat():
#     data = request.json
#     user_message = data['message']

#     response = client.completions.create(
#         model='gpt-3.5-turbo',
#         # engine='text-davinci-003',
#         prompt=user_message,
#         max_tokens=256,
#         top_p=1,
#         stop=None,
#         temperature=0.7
#     )

#     assistant_reply = response.choices[0].text.strip()

#     return jsonify({'message': assistant_reply})

# if __name__ == '__main__':
#     app.run(port=5555)

import os
from dotenv import load_dotenv

from flask import Flask, render_template, request
from flask_cors import CORS
import requests
import openai
from playsound import playsound

load_dotenv()

app = Flask(__name__)
CORS(app)
history = []

@app.route("/", methods=['GET', 'POST'])
def home():
    answer = ""
    submitted_text = None

    if request.method == 'POST':
        submitted_text = request.form['textbox']
        answer = get_response(submitted_text)
        history.append((submitted_text, answer))

    return render_template("home.html", message=history)

@app.route("/app", methods=['GET', 'POST'])
def app_response():
    answer = ""
    submitted_text = request.json.get('content')
    
    if request.method == 'POST' or request.method == 'GET':
        answer = get_response(submitted_text)
        history.append((submitted_text, answer))

    # return render_template("home.html", message=history)
    return answer


# Insert your environment key 
openai.api_key = os.environ.get("OPENAI_API_KEY")

def get_response(question):
  response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
      {
        "role": "system",
        "content": "you are an interviewer for an entry-level software developer position. You should respond in an encouraging, yet slightly analytical manner."
      },
      {
        "role": "user",
        "content": "Hello, how are you? I'm here to interview for an entry-level developer position."
      },
      {
        "role": "assistant",
        "content": "Nice to meet you, I'm doing fine! Please tell me a little about yourself and why you want to work for our company?"
      },
      {
        "role": "user",
        "content": question
      }
    ], 
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
  )

  processed = response["choices"][0]["message"]["content"]
  # return processed

  CHUNK_SIZE = 1024
  url = "https://api.elevenlabs.io/v1/text-to-speech/XrExE9yKIg1WjnnlVkGX"
  elevenLabsKey = os.environ.get("ELEVENLABS_API_KEY")

  headers = {
    "Accept": "audio/mpeg",
    "Content-Type": "application/json",
    "xi-api-key": elevenLabsKey
  }

  data = {
    "text": processed,
    "model_id": "eleven_monolingual_v1",
    "voice_settings": {
      "stability": 0.5,
      "similarity_boost": 0.5
    }
  }

  response2 = requests.post(url, json=data, headers=headers)
  with open('output.mp3', 'wb') as f:
      for chunk in response2.iter_content(chunk_size=CHUNK_SIZE):
          if chunk:
              f.write(chunk)

  playsound("output.mp3")

  # response2 = requests.request("POST", url, json=data, headers=headers)
  # print(response2.text)
  return processed



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5555)

