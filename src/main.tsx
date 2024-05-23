import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts' 
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import './assets/style/global.css'
import {BrowserRouter as Router}  from "react-router-dom";





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme="light">
        <Router>
          <App/>
        </Router>
      </ThemeProvider>
    </Provider>,
  </React.StrictMode>,
)
