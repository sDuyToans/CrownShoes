import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { connect, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = ({currentUser}) => {
  console.log(currentUser);
  const dispatch = useDispatch();
  const logOut = () => {
    signOutUser();
    const action = {
      type: "LOG_OUT",
      payload: false,
    };
    dispatch(action);
  };
  const renderCurrentUser = (currentUser) => {
    switch(currentUser){
      case true:
        return ( <Link as={"span"} onClick={logOut} to="#" style={{ textDecoration: "none", color: "#000" }}>
        SIGN OUT
      </Link>)
      break;
      case false: 
      return (<Link  to="/auth" style={{ textDecoration: "none", color: "#000" }}>SIGN IN</Link>
      )
      break;
    }
  }
  return (
    <>
      <div className="navigation-container">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link style={{ textDecoration: "none", color: "#000" }} to="/shop">
            SHOP
          </Link>
          {renderCurrentUser(currentUser)}
        </div>
      </div>
      <Outlet />
    </>
  );
};
const mapStateToProps = (state) => {
  return { currentUser: state.userReducer.currentUser };
};
export default connect(mapStateToProps)(Navigation);
