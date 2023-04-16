import React, { useState } from "react";
import Children from "./Children.jsx";

export default function Parent() {
  const [name, setName] = useState("foo");
  return (
    <div>
      <Children name={name} setName={setName} />
    </div>
  );
}
