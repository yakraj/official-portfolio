export const YoutubeVideo = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "999",
        display: window.location.href.includes("video") ? "block" : "none",
      }}
    >
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/YVL_VMf8QL8"
        title="Yakraj Pariyar Portfolio||Creative1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
