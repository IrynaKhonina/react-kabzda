import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <AppTitle/>
      <Raiting/>
      <Accordion/>
    </div>
  );
}

function AppTitle (){
  return(
    <>
     This is App component
    </>
   
  );
}

function Raiting (){
  return(
    <>
    <Star/>
    <Star/>
    <Star/>
    <Star/>
    <Star/>
    </>
   
  );
}

function Star (){
  return(
    <div>
    star
    </div>
   
  );
}


function Accordion (){
  return(
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  );
}

function AccordionTitle(){
  return (
<>
<h3>Меню</h3>
</>
  );
}

function AccordionBody(){
  return (
<>
    <ul>
        <li>
          1
        </li>
        <li>
          2
        </li>
        <li>
          3
        </li>
               
      </ul>
</>
  );
}




export default App;


