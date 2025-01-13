import React from 'react';

function getYouTubeVideoId(url) {
  const regex = /[?&]v=([^#\&\?]+)/;
  const match = url.match(regex);
  return match && match[1] ? match[1] : null;
}

const CardWithVideo = ({ title, description, imageUrl, videoUrl }) => {
  const videoId = getYouTubeVideoId(videoUrl);

  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      {videoId && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default CardWithVideo;
