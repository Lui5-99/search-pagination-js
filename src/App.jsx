import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
