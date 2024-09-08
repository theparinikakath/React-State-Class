import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Lottery from './Lottery'
import TicketNum from './TicketNum';
import "./Ticket.css"
import {sum} from "./helper"

function App() {
let winCondition = (ticket)=>{
  // return sum(ticket)===15;
  // return ticket[0] === 0;
  return ticket.every((num)=>num===ticket[0]);
};
  return (
    <>
      <Lottery n={3} winningSum={15} winCondition={winCondition}/>
    </>
  )
}

export default App;
