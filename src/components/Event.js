import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import {
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
  const id = event.id
  const { dispatch } = useContext(AppContext)
  const handleDeleteButton = () => {
    const result = window.confirm(`idが${id}のイベントを削除しても良いですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id = ${id})を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }
            
  return (
    <tr>
      <th>{id}</th>
      <th>{event.title}</th>
      <th>{event.body}</th>
      <th><button className="btn btn-danger" onClick={handleDeleteButton}>削除</button></th>
    </tr>
  )
}

export default Event;
