function NoteItem({ note, onDelete }) {
  const rotation = Math.floor(Math.random() * 21) - 5;
  const style = { transform: `rotate(${rotation}deg)` };

  return (
    <div style={style} className={`note ${note.important ? 'important' : ''}`}>
      <button onClick={() => onDelete(note.id)}>X</button>
      <h3>{note.title}</h3>
      <p>{note.desc}</p>
    </div>
  );
}

export default NoteItem;