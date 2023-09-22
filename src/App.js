import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRegisterPage from "./pages/usersRegisterPage//UsersRegisterPage"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import UsersListPage from "./pages/userListPage/userListPage"

const App=()=>{
 return(
  <BrowserRouter>
    <Routes>
      <Route index element={<UserRegisterPage/>}/>
      <Route path={'/users'} element={<UsersListPage/>}/>
    </Routes>
  </BrowserRouter>
 )
 
}
export default App