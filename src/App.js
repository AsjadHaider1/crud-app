import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./Assets/Create";
import Read from "./Assets/Read";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
