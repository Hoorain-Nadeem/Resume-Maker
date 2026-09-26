import { Route, Routes } from "react-router-dom";
import Resume from "./resume";
import "./App.css";
import Form from "./form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/resume/:id" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
