import { useState } from 'react';

function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc.trim()) return alert("La descripción es obligatoria"); // Validación 
    onAdd({ title, desc, important });
    setTitle(''); setDesc(''); setImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Descripción" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <label> <input type="checkbox" checked={important} onChange={() => setImportant(!important)} /> Importante </label>
      <button type="submit">AGREGAR</button>
    </form>
  );
}
export default NoteForm;