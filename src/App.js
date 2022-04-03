import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Details from './Components/Details/Details';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
