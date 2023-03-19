import { Server } from "../components/server";
export const AqSmallProjects = (isLoadingSmall, setSmallProjects) => {
  fetch(Server + "/smallproject")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setSmallProjects(data);
      isLoadingSmall(false);
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
    });
};
