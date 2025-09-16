import React from 'react';
import { characters } from '../data/characters';

const Nodes = () => {
  return (
    <div className="container my-4">
      <div className="d-flex flex-wrap justify-content-start gap-4">
        {characters.map((character, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="card h-100 p-0" style={{ width: '25rem' }}>
              <img 
                src={character.img} 
                className="card-img-top" 
                style={{ objectFit: 'cover', height: '200px', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} 
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Role: {character.role}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nodes;

