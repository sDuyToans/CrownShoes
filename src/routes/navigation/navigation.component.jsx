import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import Footer from "../../components/footer/footer.component";
import { signOutStart } from "../../store/user/user.action";
const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  const logOut = () => {
    dispatch(signOutStart());
  };
  const renderCurrentUser = (currentUser) => {
    switch(currentUser){
      case null: return (<Link  to="/auth" style={{ textDecoration: "none", color: "#000" }}>SIGN IN</Link>)
      default: 
      return ( <Link as={"span"} onClick={logOut} to="#" style={{ textDecoration: "none", color: "#000" }}>
      SIGN OUT
      </Link>)
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
          <CartIcon/>
          { isCartOpen && <CartDropdown/>}
        </div>
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};
export default Navigation;
