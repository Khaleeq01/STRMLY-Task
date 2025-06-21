import '../styles/BottomNav.css';
import { FaHome, FaVideo, FaPlus, FaSearch, FaUser } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <FaHome size={20} />
        <div>Home</div>
      </div>
      <div className="nav-item">
        <FaVideo size={20} />
        <div>Shorts</div>
      </div>
      <div className="nav-item add-btn">
        <FaPlus size={24} />
      </div>
      <div className="nav-item">
        <FaSearch size={20} />
        <div>Search</div>
      </div>
      <div className="nav-item">
        <FaUser size={20} />
        <div>Profile</div>
      </div>
    </div>
  );
};

export default BottomNav;
