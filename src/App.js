import logo from './logo.svg';
import './App.css';
import Counter from './feature/counter/Counter';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostList from './feature/posts/PostList';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><Link to="/">counter</Link></li>
          <li><Link to="/posts">posts</Link></li>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Counter />} />
      <Route path='/posts' element={<PostList />} />
    </Routes>
    </div>
  );
}

export default App;
