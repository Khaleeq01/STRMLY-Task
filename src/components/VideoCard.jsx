import { useState } from 'react';
import {
  FaHeart,
  FaCommentDots,
  FaShare,
  FaRupeeSign,
  FaEllipsisV
} from 'react-icons/fa';
import '../styles/VideoCard.css';

const VideoCard = ({ video, videoRef }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const videoEl = videoRef?.current;
    if (!videoEl) return;

    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container" onClick={togglePlayPause}>
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="video"
        loop
        playsInline
      />
      <div className="overlay">
        <div className="left-info">
          <div className="hashtag-line">
            <span className="hashtag">{video.hashtag}</span>
            <button className="plus-btn">+</button>
          </div>

          <div className="creator-line">
            <span className="creator">{video.userName}</span>
            <button
              className="follow-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsFollowed(!isFollowed);
              }}
            >
              {isFollowed ? 'Following' : 'Follow'}
            </button>
          </div>

          <div className="title-line">
            <span className="title">{video.title}</span>
            <span className="episode">{video.episode}</span>
          </div>

          <p className="description">{video.description}</p>
          {video.isPaid && <span className="paid-badge">Paid</span>}
        </div>

        <div className="right-icons">
          <div><FaHeart /><br />{video.likes.toLocaleString()}</div>
          <div><FaCommentDots /><br />{video.comments.toLocaleString()}</div>
          <div><FaShare /><br />{video.shares}</div>
          <div><FaRupeeSign /><br />₹{video.earnings.toLocaleString()}</div>
          <div><FaEllipsisV /></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

