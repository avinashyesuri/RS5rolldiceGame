// src/Showrulz.js
import React from 'react';

function Showrulz() {
    const cardStyle = {
        width: '30%',
        backgroundColor: 'rgb(144, 177, 190)', // Lighter light red 
    
        color: 'black',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left', // Align text to the start
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the start
        fontFamily: 'Arial, sans-serif', // Sharper font
        fontWeight: 'bold', // Bold font
        position:"absolute",
        top:"50%",
        left:"65%"
      };
      

  return (
    <div style={cardStyle}>
      <h1 style={{padding:'10px'}}>How to play Dice</h1>
      <p style={{padding:'5px'}}>Select  NumberCard</p>
      <p style={{padding:'5px'}}>Click on dice image</p>
      <p style={{padding:'5px'}}>If you guess correct, Numcard points will be added.</p>
      <p style={{padding:'5px'}}>If you guess wrong, 2 points will be deducted.</p>
    </div>
  );
}

export default Showrulz;
