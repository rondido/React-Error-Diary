import React from "react";
import { cookieState } from "../../state";
import { useRecoilState } from "recoil";

const Cookie = () => {
  const [cookies, setCookies] = useRecoilState(cookieState);

  return (
    <div>
      {cookie.map((cookie) => (
        <Card cookies={cookie} key={cookie.id} idx={cookie.id} />
      ))}
    </div>
  );
};
export default Cookie;
