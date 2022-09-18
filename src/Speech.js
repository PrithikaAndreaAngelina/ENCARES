import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <><section class="bg-yellow-400">
      <div class="container px-6 py-10 mx-auto">
        <button class="bg-white text-purple-700 font-semibold py-2 px-4 border border-purple-50 rounded shadow">
          <p>Microphone: {listening ? 'on' : 'off'}</p>
        </button>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

          <div class="lg:flex bg-[#5E17F4] rounded-lg shadow-purple-900 h-96">
            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <h2 class="text-xl font-semibold  dark:text-white ml-3">
                Text area :
              </h2>
              <div class="text-2xl ml-7 font-semibold dark:text-white">
              {transcript}
              </div>
              <div class="flex p-1 mt-2 w-full justify-center">
                <button class="min-w-auto w-32 h-10 mr-2 bg-green-300 p-2 rounded-xl hover:bg-green-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold" onClick={SpeechRecognition.startListening}>
                  Start
                </button>
                <button onClick={SpeechRecognition.stopListening} class="min-w-auto w-32 h-10 bg-red-300 p-2 rounded-xl hover:bg-red-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
                  Stop
                </button>

                <button onClick={resetTranscript} class="min-w-auto w-32 h-10 ml-2 bg-blue-300 p-2 rounded-xl hover:bg-blue-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
                  Reset
                </button>
                <br />

              </div> </div> </div>

          <div class="lg:flex bg-[#5E17F4] rounded-lg shadow-lg h-96">
            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <h2 class="text-xl font-semibold  dark:text-white ml-3">
                Saved Text
              </h2>
              <div class="text-2xl ml-7 font-semibold dark:text-white">
              {finalTranscript}
              </div>

            </div>

          </div>


        </div>
      </div>
      <br /> <br /> <br />
      <div class="flex items-center justify-center mt-4">

        <div class="text-xl font-bold text-black m-0.5">
          Made with ❤️ by team Sierra - 4
        </div>  </div>
        <br />     <br />     <br />
    </section>
      </>
  );
};
export default Speech;