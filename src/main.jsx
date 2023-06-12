import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterApp from './CounterApp.jsx'
import TasksApp from './TasksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksApp />
    {/* <CounterApp /> */}
  </React.StrictMode>,
)
