import { useEffect } from "react";

function useOnKeyPress(func: () => any, key: string) {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === key) {
        event.preventDefault();
        func();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const unregister = () => {}; //todo

  return { unregister };
}

export default useOnKeyPress;
