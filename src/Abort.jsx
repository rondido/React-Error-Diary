import { useEffect, useState } from "react";

function Dog({ dog }) {
  return (
    <div>
      <h2>dog가 있다.</h2>
      <img src={dog.message} style={{ maxWidth: "400px" }} />
    </div>
  );
}

export default function DogRandome() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    try {
      const response = fetch("https://dog.ceo/api/breeds/image/random", {
        signal: controller.signal,
      }).then((res) => res.json());

      setDog(response);
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort();
    };
  }, []);
  console.log(dog);
  return <div>{dog ? <Dog dog={dog} /> : <div>dog가 없다.</div>}</div>;
}
