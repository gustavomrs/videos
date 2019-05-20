import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoListItem video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
