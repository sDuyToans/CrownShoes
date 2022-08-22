import { useState } from "react";
import { signInWithGooglePopup, signInWithFacebookPopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.component.styles.scss";
const defaultFormFields = {
  email: '',
  password: ''
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () =>{
    setFormFields(defaultFormFields);
  }
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }
  const logFacebookUser = async () => {
    const response = await signInWithFacebookPopup();
    console.log(response);
    
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default: 
          console.log(error)
      }
     
    }
  }
  return (
    <div className="sign-in-container">
      <div className="screen">
       
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
          <h2>Already have an acount ?</h2>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="Email"
                name='email'
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <button className="button login__submit" type="submit">
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
