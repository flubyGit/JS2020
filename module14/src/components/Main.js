import './Main.css'
import React, { useState } from 'react'
import api from '../services/axios'
import Form from './Form'
import List from './List'

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
      <Form 
        handleSubmit={handleSubmit}
        tasks={tasks}
        setTasks={setTasks}
      />
     <List 
        listTasks={listTasks} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
     />
    </div>
  )
}
export default Main
