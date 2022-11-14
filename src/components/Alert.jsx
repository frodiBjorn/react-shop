import React from "react";
import { useEffect, useContext } from "react";
import { ShopContext } from "./../context";

const Alert = () => {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id="toast-container">
      <div className="toast">{name} add to cart</div>
    </div>
  );
};

export default Alert;
