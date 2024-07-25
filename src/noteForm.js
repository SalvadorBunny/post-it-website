import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


export default function NoteForm({addNote}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      if (description.trim() == '') {
        alert('La descripción es obligatoria');
      } else {
        addNote({title, description, isImportant,});
        setTitle('');
        setDescription('');
        setIsImportant(false);
      }
    }
  
    return (
      <form onSubmit={handleSubmit} className="d-flex align-items-center flex-wrap mb-4">
        <div className="mb-3 me-2 flex-shrink-1">
          <input type="text" name="title" className="form-control" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div className="mb-3 me-2 flex-grow-1">
          <input name="description" className="form-control" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
        </div>
        <div className="form-check me-2">
          <input type="checkbox" name="isImportant" className="form-check-input" checked={isImportant} onChange={(e) => setIsImportant(e.target.checked)}
          />
          <label className="form-check-label">Importante</label>
        </div>
        <button type="submit" className="btn btn-primary">Agregar Nota</button>
      </form>
    );
}