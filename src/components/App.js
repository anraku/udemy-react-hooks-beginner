import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { reducer, initialState } from '../reducers/index';

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const createEvent = () => {

  }
  const deleteAllEvents = () => {

  }
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary" onClick={createEvent}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map(event  =>
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
