import React, { useState } from 'react';
import axios from 'axios';
//import classNames from 'classnames';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async (event:any) => {
      event.preventDefault();
      setErrorMessage('');
  
      if (!username) {
        setErrorMessage('Username is required');
        return;
      }
  
      if (!password) {
        setErrorMessage('Password is required');
        return;
      }
  
      try {
        const response = await axios.post('/api/login', { username, password });
        console.log(response.data);
      } catch (error:any) {
        setErrorMessage(error.message);
      }
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
                <form onSubmit={handleLogin}>
                    <label className="font-extrabold text-xl text-Black group relative w-full flex justify-center py-2 px-4 space-x-4">
                    <span className="text-gray-700">Username</span>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="appearance-none rounded-none relative block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900 rounded-t-md
                            focus:outline-none focus:ring-indigo-500
                            focus:border-indigo-500 focus:z-10 sm:text-sm"
                            // className={classNames(
                            //   'appearance-none rounded-none relative block',
                            //   errorMessage && 'border-red-500',
                            // )}
                        />
                    </label>
                    <label className="font-extrabold text-xl text-Black group relative w-full flex justify-center py-2 px-4 space-x-4">
                    <span className="text-gray-700">Password</span>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="appearance-none rounded-none relative block
                            w-full px-3 py-2 border border-gray-300
                            placeholder-gray-500 text-gray-900 rounded-t-md
                            focus:outline-none focus:ring-indigo-500
                            focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </label>
                    <button type="submit" className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-bold
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-black-500 space-y-4 ring">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
