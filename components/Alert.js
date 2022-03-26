import React, { useContext, useEffect } from "react";
import { Context } from "../context";
export default function Alert() {
  const { alert, setAlert } = useContext(Context);
  useEffect(() => {
    if (!alert.color) return;
    setTimeout(() => {
      setAlert({});
    }, 4500);
  }, [alert]);
  return (
    <>
      {alert.color ? (
        <div className=" fixed z-50 mt-3  w-full flex justify-center items-center">
          <div className={`${alert.color} px-6 py-3 rounded text-white text-xl`}>
            {alert.text}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
