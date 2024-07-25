import React from 'react';

export default function Note({ note }) {
  return (
    <div className={`note card ${note.isImportant ? 'border-danger' : ''}`}>
      <div className="card-body">
        <div className={`pin ${note.isImportant ? 'border-danger' : ''}`}></div>
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

