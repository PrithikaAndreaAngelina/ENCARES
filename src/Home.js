import React from 'react';
import {Link} from 'react-router-dom';
import Yel from '../src/Yel.jpeg';
import './App.css';

function Home(){
  return(
    <><section class="bg-yellow-400">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div class="inline-flex justify-between items-center">
<img class="h-12" src={Yel}/>
        </div>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-purple-600">Any Time, Any Place Speech to Text Assistance</h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">We aim at providing, “Better Voices, Better Content” and ready to help when you are.We work with you to provide an assistant that cares and to get things done.<br />Think Help ! Think Encares !</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="https://video-app-5553-4830-dev.twil.io/?passcode=56310455534830" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-purple-600  focus:ring-4 focus:ring-gray-100 dark:text-white  dark:hover:bg-purple-700 dark:focus:ring-purple-600 dark:bg-purple-600">
            <img class="mr-2 -ml-1 h-10" src="https://www.vectorlogo.zone/logos/twilio/twilio-ar21.svg" />
            Twilio Video Call
          </a>
          <Link to="/speech">
          <a  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-purple-600  focus:ring-4 focus:ring-gray-100 dark:text-white  dark:hover:bg-purple-700 dark:focus:ring-purple-600 dark:bg-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-4 -ml-1 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>

            Textque
          </a>
          </Link>
        </div>
      </div>
    </section><div class="focus:outline-none py-8 w-full bg-yellow-400">
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 mb-8">
          <span class="font-semibold text-black uppercase">FEATURES</span>
        </div>


        <div class="lg:flex items-center justify-center w-full">



          <div tabindex="0" aria-label="card 1" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
            <div class="flex items-center border-b border-gray-200 pb-6">
              <div class="flex items-start justify-between w-full">
                <div class="pl-3 w-full">
                  <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Instant Speech to Text Conversion</p>
                </div>
                <div role="img" aria-label="bookmark">
                  <svg class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="px-2">
              <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">A Speech Recognition app built that quickly transcribe audio to text from the user's microphone .  A simple to use app for dictating text which can be receieved through Calls , Meetings ,etc .</p>
            </div>
          </div>


          <div aria-label="card 2" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
            <div class="flex items-center border-b border-gray-200 pb-6">
              <div class="flex items-start justify-between w-full">
                <div class="pl-3 w-full">
                  <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Twilio Video Calls</p>
                </div>
                <div aria-label="bookmark" role="img">
                  <svg class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="px-2">
              <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">A collaboration application built with the application built with Twilio's Programmable Video JS SDK and Twilio's Conversations JS SDK,to keep in touch with your friends, family, and colleagues.</p>
            </div>
          </div>
        </div>
        <div class="lg:flex items-center justify-center w-full mt-7">
                <div aria-label="card 3" tabindex="0" class="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div class="flex items-center border-b border-gray-200 pb-6">
                        <div class="flex items-start justify-between w-full">
                            <div class="pl-3 w-full">
                                <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800">Saved and Final Transcripts</p>
                            </div>
                            <div  >
                                <svg  class="focus:outline-none" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="px-2">
                        <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600">Distinguishing the interim and final transcripts for the user to give a smooth approach towards the app.It shows the transcript of speech picked up from the user's microphone.</p>
                    </div>
                </div>
              
        </div>
      </div></>
        );
        };

        export default Home;