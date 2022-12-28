import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>CRUD REACT-REDUX Example 1</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
