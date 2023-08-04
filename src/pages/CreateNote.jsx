import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'

const CreateNote = () => {
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary">Salvar</button>
      </header>
      <form className='create-note__form'>
        <input type='text' autoFocus placeholder='Título' />
        <textarea placeholder='Digite sua nota...' rows='28'></textarea>
      </form>
    </section>
  )
}

export default CreateNote
