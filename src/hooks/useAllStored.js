import React, { useEffect, useState } from "react";

const prefix = "useLocalStore:";
const useAllLocalStoreValues = () => {
  const [allValues, setAllValues] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const values = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
          const value = localStorage.getItem(key);
          const unprefixedKey = key.substring(prefix.length);
          values[unprefixedKey] = value ? JSON.parse(value) : null;
        }
      }
      setAllValues(values);
    }
  }, []);

  return allValues;
};

export default useAllLocalStoreValues;
