import React from 'react';
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import CreateBooks from './pages/CreateBooks';
import {BrowserRouter,Routes,Route  } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/> 
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<Home/>}/>
      <Route path='/books/delete/:id' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App