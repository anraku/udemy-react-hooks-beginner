import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../contexts/AppContext'
import reducer from '../reducers/index';
import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  console.log(AppContext)
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={"hello, I am a provider"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
