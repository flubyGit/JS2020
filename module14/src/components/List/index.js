import './Tasks.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function List({handleEdit,handleDelete,listTasks}) {

  return (
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
  )
}
List.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  listTasks: PropTypes.func.isRequired
}
