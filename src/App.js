
import './App.css';
import { Booksprovider } from './Bookscontext';
import Books from './components/Books';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
function App() {
  return (
    <Booksprovider>

      <Router>
        <Routes>
          <Route path='/' element={<Books></Books>}></Route>
          <Route path='/books' element={<Navigate to="/"/>}></Route>
        </Routes>
      </Router>
    </Booksprovider>
  );
}

export default App;
