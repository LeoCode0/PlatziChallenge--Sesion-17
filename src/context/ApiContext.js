import React, { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext({});

export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [coordinates, setCoordinates] = useState([47.44, 3.16]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((weather) => {
        setData(weather);
      });
  }, []);

  return <APIContext.Provider value={data}>{children}</APIContext.Provider>;
};

export const useApi = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    return "Hey esto no funciona";
  }

  return context;
};
