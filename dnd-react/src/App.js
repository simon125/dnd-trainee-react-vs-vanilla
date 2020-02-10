import React, { useState } from 'react';
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

const initialElements = [
  { name: 'Element 1', col: 3 },
  { name: 'Element 2', col: 3 },
  { name: 'Element 3', col: 3 }
];

function App() {
  const [elements, setElements] = useState(initialElements);
  const [draggedEl, setDraggedEl] = useState(null);

  const handleDragStart = (e) => {
    // debugger;
    const target = e.target;
    setDraggedEl(e.target.id);
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };
  const handleDragEnd = (e) => {
    const target = e.target;
    setDraggedEl(null);

    setTimeout(() => {
      target.style.display = '';
    }, 0);
  };
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'rgb(127, 248, 255)';
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'rgb(97, 218, 251)';
  };

  const handleDrop = (e) => {
    if (['col1', 'col2', 'col3'].includes(e.target.id)) {
      const colNum = parseFloat(e.target.id.split('col')[1]);
      setElements([
        ...elements.filter((el) => el.name !== draggedEl),
        { name: draggedEl, col: colNum }
      ]);
    }
    e.currentTarget.style.backgroundColor = 'rgb(97, 218, 251)';
  };

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
        <div
          id="col1"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={style.listStyle}
        >
          {elements
            .filter((el) => el.col === 1)
            .map((el) => {
              return (
                <div
                  key={el.name}
                  id={el.name}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={true}
                  style={style.listItem}
                >
                  {el.name}
                </div>
              );
            })}
        </div>
        <div
          id="col2"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={style.listStyle}
        >
          {elements
            .filter((el) => el.col === 2)
            .map((el) => {
              return (
                <div
                  key={el.name}
                  id={el.name}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={true}
                  style={style.listItem}
                >
                  {el.name}
                </div>
              );
            })}
        </div>
        <div
          id="col3"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={style.listStyle}
        >
          {elements
            .filter((el) => el.col === 3)
            .map((el) => {
              return (
                <div
                  key={el.name}
                  id={el.name}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  draggable={true}
                  style={style.listItem}
                >
                  {el.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
