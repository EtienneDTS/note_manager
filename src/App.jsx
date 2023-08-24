import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from "./components/Header/Header.jsx";
import { NoteAPi } from './api/note-api';
import { useDispatch } from 'react-redux';
import { setNoteList } from './store/note/note-slice';

function App() {
  const dispatch = useDispatch()

  async function fetchAllNote() {
    const noteList = await NoteAPi.fetchAll()
    dispatch(setNoteList(noteList))
  }

  useEffect(()=>{
    fetchAllNote()
  },[])


  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}

export default App;
