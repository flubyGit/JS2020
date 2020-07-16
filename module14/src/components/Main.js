import './Main.css'
import React, { useState } from 'react'
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'
import api from '../services/axios'


const Main = () => {
  const [tasks, setTasks] = useState('')
  const [listTasks, setListTasks] = useState([])
  
  function handleSubmit(e){
  }
  function handleEdit(e, index){
  }
  function handleDelete(e, index){
  }
  return (
    <div className="main">
      <h1>List Tasks</h1>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input 
          onChange={e => setTasks(e.target.value)} 
          type="text"
          value={tasks}
        />
        <button type="submit"><FaPlus /></button>
      </form>

      <ul className="tarefas">
        {listTasks.map((elem, ind) => (
          <li key={ind}>
            {elem}
            <span>
              <FaEdit className="edit" onClick={e => handleEdit(e, ind)} />
              <FaWindowClose className="delete" onClick={e => handleDelete(e,ind)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Main