import React, { useContext, useEffect, useState } from "react";
import { AqMegaProjects, AqSmallProjects, getAllImages } from "./main.services";

export const MainContext = React.createContext();

export const WebContext = ({ children }) => {
  const [popAnimation, setpopAnimation] = useState("");
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
  const [MegamainD, setMegamainD] = useState();
  const [AllImages, setAllImages] = useState([]);

  const GetSmallProjects = () => {
    AqSmallProjects(setisLoadingSmall, setSmallProjects);
  };
  const GetMegaProjects = () => {
    AqMegaProjects(setisLoadingMega, setMegaProjects);
  };

  const GetAllimages = () => {
    getAllImages(setAllImages);
  };

  const GetReImages = () => {
    return AllImages;
  };
  useEffect(() => {
    GetSmallProjects();
    GetMegaProjects();
    GetAllimages();
  }, []);
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
        MegamainD,
        setMegamainD,
        AllImages,
        GetReImages,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
