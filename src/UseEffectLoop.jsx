import React, { useState, useEffect } from "react";

//setUser에 객체로 넘기면 무한 루프를 돈다
//deps에서 user의 상태를 벗어나고 최초 랜더링시에만 호출시 무한루프는 돌지 않는다.

export default function UseEffectLoop() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser({});
    console.log(user);
  }, [user]);
  //해결 방안
  // useEffect(() => {
  //   setUser({});
  //   console.log(user);
  // }, []);
  return <div>UseEffectLoop</div>;
}
