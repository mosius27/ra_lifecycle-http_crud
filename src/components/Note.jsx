import React from 'react';

export default function Note({item, onDeleteNote}) {
  const deleteNote = () => {
    onDeleteNote(item.id);
  }

  return (
    <div className="note">
      <div className="note-content">
        <div>{item.content}</div>
      </div>
      <button className="note-delete" onClick={deleteNote}>×</button>
    </div>
  )
}
