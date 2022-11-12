import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import CreateReview from './views/CreateReview';
import ShowReviews from './views/ShowReviews';



function App() {


  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <Link to={"/create"} className="btn btn-outline-success me-2" type="button">CREAR PELÍCULA</Link>
          <Link to={"/"} className="btn btn-outline-success me-2"  type="button">VER TODAS LAS PELICULAS</Link>
        </form>
      </nav>



      <Routes>
        <Route path="/" element={<Main/>}  />
        <Route path="/create" element={<Create/>}  />
        <Route path="/create-review/:id" element={<CreateReview/>}  />
        <Route path="/show-reviews/:id" element={<ShowReviews/>}  />

      </Routes>
    </div>
  );
}

export default App;
