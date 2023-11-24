import "../styles/App.css";
import Course from "./Course";
import Vertical from "./Vertical";
import Topic from "./Topic";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    //<div className="container">
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Course />} exact />
        <Route path="/chat" element={<Vertical />} />
        <Route path="/topic/:id" element={<Topic />} />
        {/* <Route path="*" element={<404 />} /> */}
      </Routes>
    </div>
    //</div>
  );
}

export default App;
