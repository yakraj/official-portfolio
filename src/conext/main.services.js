import { Server } from "../components/server";
export const AqSmallProjects = (isLoadingSmall, setSmallProjects) => {
  fetch(Server + "/smallproject")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setSmallProjects(data);
      isLoadingSmall(false);
    })
    .catch((err) => {
      window.alert("something went wrong");
    });
};
export const AqMegaProjects = (isLoadingMega, setMegaProjects) => {
  fetch(Server + "/megaproject")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setMegaProjects(data);
      isLoadingMega(false);
    })
    .catch((err) => {
      window.alert("something went wrong");
    });
};
export const getAllImages = (setAllImages) => {
  fetch(Server + "/imagesdata")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setAllImages(data);
    })
    .catch((err) => {
      window.alert("something went wrong");
    });
};
