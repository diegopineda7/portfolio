import React from 'react';
import './App.css';
import projects from './projects.json';

function App() {
  console.log(projects);
  return (
    <div className="App">
      <div className='menu'>
        | PROYECTOS | HABILIDADES | CONTACTO
      </div>
      <h1>DIEGO ALBERTO PINEDA MEDINA</h1>
      <h3>DESARROLLLO WEB Y MÓVIL</h3>
      <div className='projects'>
        {
          projects.map(item => (
            <div className='projectItem' key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.frameworks}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
