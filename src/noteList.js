import React from "react";
import Note from './note'

export default function NoteList({ notes }) {
    return (
      <div className="note-list row">
        {notes.map((note, index) => (
          <div key={index} className="frame col-lg-4 col-md-6 col-sm-12 mb-3">
            <Note note={note} />
          </div>
        ))}
      </div>
    );
  }
