import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import useCreateDate from '../components/useCreateDate'
 
const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details) {
      const note = {id: uuid(), title, details, date}
      // add this note to the Notes array
      setNotes(prevNotes => [note, ...prevNotes])

      // redirect to home page
      navigate('/');
    }
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Salvar</button>
      </header>
      <form className='create-note__form' onSubmit={handleSubmit}>
        <input type='text' autoFocus placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Digite sua nota...' rows='28' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote
