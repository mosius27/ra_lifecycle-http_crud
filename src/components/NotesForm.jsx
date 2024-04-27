import React , {useState} from 'react';

const initialForm = {
  content: ''
};

export default function NotesForm({onAddNote}) {
  const [form, setForm] = useState(initialForm);

  const onChange = e => {
    const {name, type} = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const addNote = event => {
    event.preventDefault();
    if (!/^\s*$/.test(form.content)) {
      onAddNote(form);
    }
    setForm(initialForm);
  };

  return (
    <form className="notes-form row" onSubmit={addNote}>
      <div className="form-field">
        <label htmlFor="content">New Note</label>
        <textarea id="content" name="content" value={form.content} onChange={onChange}/>
        <button className="notes-send">➤</button>
      </div>
    </form>
  )
}
