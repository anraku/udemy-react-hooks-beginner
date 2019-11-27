import React, { useContext } from 'react'
import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = ({ event, dispatch }) => {
  const value = useContext(AppContext)
  const id = event.id
  const handleDeleteButton = () => {
    const result = window.confirm(`idが${id}のイベントを削除しても良いですか？`)
    if (result) dispatch({type: DELETE_EVENT, id })
  }
            
  return (
    <>
    <div>{value}</div>
    <tr>
      <th>{id}</th>
      <th>{event.title}</th>
      <th>{event.body}</th>
      <th><button className="btn btn-danger" onClick={handleDeleteButton}>削除</button></th>
    </tr>
    </>
  )
}

export default Event;
