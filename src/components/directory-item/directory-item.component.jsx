import './directory-item.styles.scss'
import { Link } from 'react-router-dom';
const DirectoryItem = ({ p }) => {
  const { imageUrl, title, route } = p;
  return (
    <Link className="directory-item-container" to={route} style={{ textDecoration: "none", color: "#000" }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};
export default DirectoryItem;
