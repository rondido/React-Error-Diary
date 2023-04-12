import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Abort from "./Abort";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/abort" element={<Abort />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
