import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './greetings'
import BigCats from './BIgCats'
import SingleCat from './SingleCat'
import Emoji from './Emoji'


function App() {
  return (
    <div className="App">
      <Greeting name="John">Welcome to my first React App!</Greeting>
      <Greeting>WELCOME</Greeting>
      <Emoji />
      <BigCats />
    </div>
  );
}

export default App;
