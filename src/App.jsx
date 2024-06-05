import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Principal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Principal />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
