import React, { useState, useEffect } from "react";

// // Custom hooks to manage localStorage
// const useLocalStore = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     if (typeof window !== "undefined") {
//       const storedValue = localStorage.getItem(key);
//       return storedValue !== null ? JSON.parse(storedValue) : initialValue;
//     }
//     return initialValue;
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   }, [key, value]);

//   return [value, setValue];
// };

const prefix = "useLocalStore:";

export const useLocalStore = (key, initialValue) => {
  const prefixedKey = prefix + key;
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(prefixedKey);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [prefixedKey, value]);

  return [value, setValue];
};

// export default useLocalStore;
