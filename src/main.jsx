import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {Auth0Provider} from "@auth0/auth0-react"

const CLI = "mJSi6PjxZMcgyk5FXIpC5HTYhOqZKZ2y"
const DOM = "dev-76gyrab4o8b0fc0k.us.auth0.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
<Auth0Provider domain={DOM} clientId={CLI} redirectUri={window.location.origin}>
<BrowserRouter> 
    <App />
  </BrowserRouter>
</Auth0Provider>
  </Provider>
)
