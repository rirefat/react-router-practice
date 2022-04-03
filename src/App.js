import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Posts from './Posts/Posts';
import Products from './Products/Products';
import SinglePost from './SinglePost/SinglePost';
import UserDetails from './UserDetails/UserDetails';
import Users from './Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/users/:user_id' element={<UserDetails></UserDetails>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postID' element={<SinglePost></SinglePost>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
