import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const redirect_timeout = 5000;

function Error404Page() {
  const [counter, setCounter] = useState(redirect_timeout / 1000);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center">
      <h1>Error 404 Page Not Found</h1>
      <p>Redirecting to home page in {counter} seconds</p>
      <p>
        Or click{" "}
        <a href="/" className="underline">
          here
        </a>{" "}
        to go back
      </p>
    </div>
  );
}

export default Error404Page;
