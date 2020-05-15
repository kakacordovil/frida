import React from 'react';
import frida from './frida.jpg';
import './App.css';
import Background from './components/Background.jsx';

function App() {
  return (
    
    
      
    <div className="App">
    <Background/>
      <header className="App-header">
        <img src={frida} className="App-logo" alt="logo" />
        <p>
        Mexican artist Frida Kahlo is remembered for her self-portraits, pain and passion, and bold, vibrant colors. She is celebrated in Mexico for her attention to Mexican and indigenous culture and by feminists for her depiction of the female experience and form. 
        </p>
        <a
          className="App-link"
          href="https://www.biography.com/artist/frida-kahlo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Biography
        </a>
      </header>
    </div>
    
  );
}

export default App;
