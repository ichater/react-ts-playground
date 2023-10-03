import { useRef, useEffect, useMemo } from "react";
export function useDelayedFunctions() {
  function debounce(callBack, delay = 1000) {
    // set a timeout variable outside the scope of the return function
    let timeout;
    return (...args) => {
      // clear the timeout everytime the function is called
      clearTimeout(timeout);
      // create a new timeout right after the last has been cleared.
      timeout = setTimeout(() => {
        callBack(...args);
      }, delay);
    };
  }
  const useDebounce = (callback, delay = 1000) => {
    // instantiate ref that can change without triggering re-renders
    const ref = useRef();

    useEffect(() => {
      // everytime the callback is used the ref will update
      ref.current = callback;
    }, [callback]);

    const debouncedCallback = useMemo(() => {
      const func = () => {
        ref.current?.();
      };

      // call debounce with the current ref as the return of the function.
      return debounce(func, delay);
    }, []);

    return debouncedCallback;
  };

  function throttle(callBack, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs !== undefined) {
        callBack(waitingArgs);
        waitingArgs = undefined;
      }
      shouldWait = false;
    };

    return (args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      callBack(args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }

  const useThrottle = (callback, delay = 1000) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = callback;
    }, [callback]);

    const throttledCallback = useMemo(() => {
      const func = () => {
        ref.current?.();
      };

      return throttle(func, delay);
    }, []);

    return throttledCallback;
  };

  return { useThrottle, useDebounce };
}
