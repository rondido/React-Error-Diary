import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Abort from "./Abort";
import UseEffectLoop from './UseEffectLoop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/abort" element={<Abort />} />
          <Route path="/loop" element={<UseEffectLoop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
