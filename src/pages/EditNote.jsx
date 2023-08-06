import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useState } from 'react'
import useCreateDate from '../components/useCreateDate'

const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if(title && details) {
      const newNote = {...note, title, details, date};
      const newNotesArray = notes.map((item) => {
        if(item.id === id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotesArray);
    }

    // Redirect to home page
    navigate('/');
  }

  const handleDelete = () => {
    if(window.confirm('Tem certeza que deseja excluir esta nota?')) {
      const newNotesArray = notes.filter((item) => item.id !== id);
      setNotes(newNotesArray);

      // Redirect to home page
      navigate('/');
    }
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleForm}>Salvar</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className='create-note__form' onSubmit={handleForm}>
        <input type='text' autoFocus placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Digite sua nota...' rows='28' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote
