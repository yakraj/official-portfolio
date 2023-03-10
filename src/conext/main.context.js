import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const WebContext = ({ children }) => {
  const [popAnimation, setpopAnimation] = useState("my name is yakraj");
  const [alertcolour, setalertcolour] = useState("");
  const [alertmessage, setalertmessage] = useState("");
  const [alertTime, setalertTime] = useState("");
  const [embedURL, setembedURL] = useState("");
  const [popWindowInfo, setpopWindowInfo] = useState("");
  const [popmoreWork, setpopmoreWork] = useState("");
  const [popSProjects, setpopSProjects] = useState("");

  return (
    <MainContext.Provider
      value={{
        popAnimation,
        setpopAnimation,
        alertcolour,
        setalertcolour,
        alertmessage,
        setalertmessage,
        alertTime,
        setalertTime,
        embedURL,
        setembedURL,
        popWindowInfo,
        setpopWindowInfo,
        popmoreWork,
        setpopmoreWork,
        popSProjects,
        setpopSProjects,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
