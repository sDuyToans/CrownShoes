import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link style={{textDecoration: 'none', color: '#000'}} to="/shop">SHOP</Link>
          <Link style={{textDecoration: 'none', color: '#000'}} to="/auth">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
