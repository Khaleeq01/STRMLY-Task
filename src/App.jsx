import React,{ useEffect, useRef, useState } from 'react';
import VideoCard from './components/VideoCard';
import BottomNav from './components/BottomNav';
import './styles/App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch('/data/videos.json');
        const data = await res.json();
        setTimeout(() => {
          setVideos(data);
          setLoading(false);
        }, 500);
      } catch {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // prevent error on blocked autoplay
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach(ref => {
      if (ref?.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [videos]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      {videos.map((video, index) => {
        // Assign a React ref for each video
        if (!videoRefs.current[index]) {
          videoRefs.current[index] = React.createRef();
        }

        return (
          <VideoCard
            key={video.id}
            video={video}
            videoRef={videoRefs.current[index]}
          />
        );
      })}
      <BottomNav />
    </div>
  );
};

export default App;

