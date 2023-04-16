import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Abort from "./Abort";
import UseEffectLoop from "./UseEffectLoop";
import Parent from "./parent/Parent";
import Children from "./parent/Children";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/abort" element={<Abort />} />
          <Route path="/loop" element={<UseEffectLoop />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/children" element={<Children />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
