import { signInWithGooglePopup, signInWithFacebookPopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.component.styles.scss";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);

  }
  const logFacebookUser = async () => {
    const response = await signInWithFacebookPopup();
    console.log(response);
    
  }

  return (
    <div className="sign-in-container">
      <div className="screen">
       
        <div className="screen__content">
          <form className="login">
          <h2>Already have an acount ?</h2>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-google" onClick={logGoogleUser}/>
              <a href="#" className="social-login__icon fab fa-facebook"  onClick={logFacebookUser}/>
              <a href="#" className="social-login__icon fab fa-twitter" />
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
};
export default SignInForm;
