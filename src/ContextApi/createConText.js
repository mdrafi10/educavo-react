import React, { useState, createContext, useContext, useEffect } from "react";

const VarContext = createContext();

export function useVarContext() {
  return useContext(VarContext);
}

export function CreateConText({ children }) {
  const [popUp, setPopUp] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [srnSmall, setSrnSmall] = useState(false);

  const hadlePopUp = () => {
    setPopUp(true);
  };
  const handleClose = () => {
    setPopUp(false);
  };
  // scrollable function
  const scrollable = () => {
    if (window.scrollY > 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (window.outerWidth < 991) {
      setSrnSmall(true);
    } else {
      setSrnSmall(false);
    }
  };
  // resizeAble function
  const resizeAble = () => {
    if (window.outerWidth < 991) {
      setSrnSmall(true);
    } else {
      setSrnSmall(false);
    }
  };

  // navbar useEffect
  useEffect(() => {
    window.addEventListener("scroll", scrollable);
    window.addEventListener("resize", resizeAble);

    return () => {
      window.removeEventListener("scroll", scrollable);
      window.removeEventListener("resize", resizeAble);
    };
  }, []);

  // global variable
  const global = {
    popUp,
    hadlePopUp,
    handleClose,
    showNav,
    srnSmall,
  };
  //   console.log(popUp);
  return <VarContext.Provider value={global}>{children}</VarContext.Provider>;
}
