import './Form.css'
import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

export default function Form({handleSubmit,tasks,setTasks}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
    <input 
      onChange={e => setTasks(e.target.value)} 
      type="text"
      value={tasks}
    />
    <button type="submit"><FaPlus /></button>
  </form>
  )
}
// Form.defaultProps = {
//   tasks: ''
// }

Form.propTypes = {
  setTasks: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tasks: PropTypes.string.isRequired
}
