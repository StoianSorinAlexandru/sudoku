import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Board></Board>
    </div>
  );
}

function Board(){
    
    return (
        <>
          <div className='board'>
            <Square></Square>
          </div>
        </>
    )
}

function Square(){

  // useState(squares, setSqares) = 
  
  return (
      <>
        <div className='game'>
          <div className='board-row'>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          
          <div className='board-row'>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='board-row'>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
        </div>
      </>
    )
}

function Cell(){
  return (
    <>
      <div>
        <Row></Row>
        <Row></Row>
        <Row></Row>    
      </div>
    </>
  )
}



function Row(){
  return (
      <>
        <div className='board-row'>
          <button className="square"></button>
          <button className="square"></button>
          <button className="square"></button>
        </div>
      </>
    )
}

export default App;

