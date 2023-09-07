import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBooks from'./pages/CreateBooks'
import DeleteBooks from './pages/DeleteBook'
import ShowBook from './pages/ShowBooks'
import EditBooks from './pages/EditBook'


const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/books/create' element={<CreateBooks/>}/>
    //   <Route path='/books/details/:id' element={<ShowBook/>}/>
    //   <Route path='/books/edit/:id' element={<EditBooks/>}/>
    //   <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
      
    // </Routes>
    <div className='bg-red-400 text-white'>hello</div>
  )
}

export default App;