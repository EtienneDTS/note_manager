import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./store/index.js"
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageNotFund } from "./pages/PageNotFund/PageNotFund.jsx"
import { NoteBrowse } from "./pages/NoteBrowse/NoteBrowse.jsx"
import { NoteCreate } from "./pages/NoteCreate/NoteCreate.jsx"
import { Note } from "./pages/Note/Note.jsx"
import { EditNote } from "./pages/EditNote/EditNote.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path='/' element={<NoteBrowse />} />
            <Route path='/create' element={<NoteCreate />} />
            <Route path='/note/:id' element={<Note />} />
            <Route path='/note/edit/:id' element={<EditNote />} />
            <Route path='*' element={<PageNotFund />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
