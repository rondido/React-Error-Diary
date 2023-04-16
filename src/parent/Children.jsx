import React, { useEffect } from "react";

export default function Children({ name, setName }) {
  useEffect(() => {
    setName("bar");
  }, []);
  return <div>MY Parent's name is {name}</div>;
}
