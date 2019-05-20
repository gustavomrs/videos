import React from 'react';

const VideoListItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      {video.snippet.title}
    </div>
  );
};

export default VideoListItem;