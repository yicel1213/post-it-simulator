import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteItem from './components/NoteItem';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([...notes, { ...note, id: Date.now() }]);
  const deleteNote = (id) => setNotes(notes.filter(n => n.id !== id));

  return (
    <div className="app-container">
      <h1> mis Post It !</h1>
      <NoteForm onAdd={addNote} />
      <div className="notes-grid">
        {notes.map(note => <NoteItem key={note.id} note={note} onDelete={deleteNote} />)}
      </div>
    </div>
  );
}

export default App;