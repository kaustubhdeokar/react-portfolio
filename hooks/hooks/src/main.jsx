import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseEffectHook from './UseEffectHook.jsx'
import UseCallBackHook from './UseCallbackHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <hr/>
    <hr/>
    <UseEffectHook/>
    <hr/>
    <hr/>
    <UseCallBackHook/>
    <hr/>
    <hr/>
  </React.StrictMode>,
)
