import React from 'react';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => {

  
  return (
    <div>
      
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Join/>} />
          <Route path='/chat' element={<Chat/>} />
         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App