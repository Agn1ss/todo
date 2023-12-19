import React, { useCallback, useState } from "react";

export default function useFlag(defaultValue = false) {
  const [flag, setFlag] = useState(defaultValue);
  const toggleFlag = useCallback(() => {
    setFlag((prevFlag) => !prevFlag);
  }, []);
  return [flag, setFlag, toggleFlag];
}
