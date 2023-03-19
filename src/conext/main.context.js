import React, { useContext, useEffect, useState } from "react";
import { AqMegaProjects, AqSmallProjects } from "./main.services";

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
  const [SmallProjects, setSmallProjects] = useState([]);
  const [MegaProjects, setMegaProjects] = useState([]);
  const [isLoadingSmall, setisLoadingSmall] = useState(true);
  const [isLoadingMega, setisLoadingMega] = useState(true);

  const GetSmallProjects = () => {
    AqSmallProjects(isLoadingSmall, SmallProjects);
  };
  const GetMegaProjects = () => {
    AqMegaProjects(isLoadingMega, MegaProjects);
  };
  useEffect(() => {
    GetSmallProjects();
    GetMegaProjects();
  }, []);
  console.log(MegaProjects, SmallProjects);
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
        SmallProjects,
        MegaProjects,
        isLoadingSmall,
        isLoadingMega,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
