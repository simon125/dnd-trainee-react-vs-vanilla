import React from 'react';
import './App.css';

const style = {
  listStyle: {
    backgroundColor: 'rgb(97, 218, 251)',
    width: '300px',
    minHeight: '90vh'
  },
  listContainer: { display: 'flex', justifyContent: 'space-around' },
  listItem: {
    minHeight: '40px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: '10px',
    borderRadius: '5px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#333'
  }
};

function App() {
  return (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: 'rgb(40, 44, 52)'
      }}
    >
      <header>
        <h1
          style={{
            padding: '10px',
            marginLeft: '40px',
            color: 'rgb(97, 218, 251)'
          }}
        >
          Drag n drop - React
        </h1>
      </header>
      <div style={style.listContainer}>
        <div style={style.listStyle}>
          <div draggable={true} style={style.listItem}>
            Element 1
          </div>
        </div>
        <div style={style.listStyle}></div>
        <div style={style.listStyle}></div>
      </div>
    </div>
  );
}

export default App;
