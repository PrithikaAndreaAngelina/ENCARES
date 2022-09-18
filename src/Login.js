import React from 'react';
// import logo from './logo.svg';
import Pbg from '../src/Pbg.jpeg';
import Home from './Home';
import './App.css';
import { Link } from 'react-router-dom';


function Login() {
  return(
    <section class="bg-yellow-400 h-screen">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-purple-600 dark:border-purple-700">
                 <div class="flex items-center justify-center">
              <img class="h-12" src={Pbg}/>
                 </div>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Welcome to Encares !
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@domain.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded   focus:ring-purple-600 dark:bg-purple-700 dark:border-purple-600 dark:focus:ring-purple-600 " required/>
                            </div>
                            <div class="ml-3 text-sm mb-2">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <Link to="/home">

                    <button type="submit" class="w-full text-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-200 ">Login</button>
                    </Link>
              
                </form>
            </div>
        </div>
    </div>
  </section>
   );
 }
export default Login;