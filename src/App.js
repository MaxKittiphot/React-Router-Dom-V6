import './App.css';
import Home from "./Pages/Home"
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"
import NotFoundPage from "./Pages/NotFoundPage"

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/page1"> Page1 </Link>
        <Link to="/page2"> Page2 </Link>
      </nav>
      {/* Routes shows depending on the route */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
        <Route path="/page2/:name" element={<Page2/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      <div>This is footer</div>
    </Router>
  );
}

export default App;
