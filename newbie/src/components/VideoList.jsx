import React from "react";
const videos = [
  {
    name: "Замыкание: От и До",
    duartion: "15",
    id: 1,
  },
  {
    name: "Roadmap по JS",
    duartion: "15",
    id: 2,
  },
  {
    name: "Что такое Фронтенд",
    duartion: "15",
    id: 3,
  },
];

const VideoList = () => {
  return (
    <>
      <h1>Это видео лист</h1>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.name}</p>
            <p>{video.duartion}</p>
            <button>Лайк!</button>
          </div>
        );
      })}
    </>
  );
};
export default VideoList;
