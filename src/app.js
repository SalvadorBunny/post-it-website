import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import NoteForm from './noteForm';
import NoteList from './noteList';

import './assets/css/note.css';
import './assets/css/style.css';
import './assets/css/form.css';

export default function App(){

    const [notes, setNotes] = useState([]);

    useEffect(() => {
      const storedNotes = JSON.parse(localStorage.getItem('notes'));
      if (storedNotes) {
        setNotes(storedNotes);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);
  
    function addNote(note) {
      setNotes((prevNotes) => [...prevNotes, note]);
    }

    return(
        <div className='container pt-3 px-3 gray corkboard'>
            <div className='container pt-3 px-4 whiteboard'>
                <h2>Post-it notes!!!</h2>
                <hr></hr>
                <NoteForm addNote={addNote}></NoteForm>
            </div>
            <NoteList notes={notes}></NoteList>
        </div>
    )
}