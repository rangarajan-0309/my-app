import React from 'react';
import Login from './components/loginPage';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center">
      <div className="text-3xl font-semibold text-center text-indigo-700 uppercase">
      <h1 className="mb-6 text-5xl font-bold font-serif italic tracking-wide">Fily</h1>
       <Login></Login>
       </div>
    </div>

  );
}

export default App;
