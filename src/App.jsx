import { useState } from 'react'
import reactLogo from './assets/react.svg'
import catImg from './assets/cat.png'
import viteLogo from '/vite.svg'
import './App.css'

const names = ["Chappurr Roan", "Fearl Werewolf", "Big Papa Huge Time", "Catthew", "Dave the Magical Cheese Wizard"]

function SillyCat() {
  return (
    <img src={catImg} className="logo" alt="Silly Cat" />
  );
}

function PickName() {
  let index = Math.floor(Math.random() * names.length);

  return (
    <h1 style={{color: names[index].length % 2 === 0 ? "#87FFD9" : "#870200"}}>This is quite the silly cat. Their name is {names[index]}</h1>
  );
}

function PetButton() {
  const listNames = names.map(name => 
    <li>{name}</li>
  );
  return (
    <div>
      <p>Here is a list of all the possible names:</p>
      <ul>{listNames}</ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SillyCat />
      <PickName />
      <PetButton />

    </>
  )
}

export default App
