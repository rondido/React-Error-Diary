import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let mountCount = 1;

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    console.log("mount: ", mountCount);
    mountCount++;
    setDidMount(true);
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("didMount: ", didMount);
    if (didMount) {
      console.log("api 호출");
      const fetchData = [
        {
          name: "설거지",
        },
      ];
      setTodoList(fetchData);
    }
  }, [didMount]);

  return (
    <div>
      <h2>Todo API 호출테스트</h2>
      {todoList.map((todo, todoIndex) => (
        <p key={todoIndex}>{todo.name}</p>
      ))}
      <Link to="/home">Home</Link>
    </div>
  );
}
