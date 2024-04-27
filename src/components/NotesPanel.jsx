import React from 'react';
import Note from './Note';

export default function NotesPanel({items, onDeleteNote}) {
  return (
    <div className="notes-panel row">
      {items.map(item => <Note key={item.id} item={item} onDeleteNote={onDeleteNote}/>)}
    </div>
  )
}
