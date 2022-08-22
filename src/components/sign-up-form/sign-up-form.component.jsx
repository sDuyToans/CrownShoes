import { useState } from "react";
import "./sign-up-form.component.styles.scss";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () =>{
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!password === confirmPassword){
      alert('your password and confirm password do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  };
  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Registration An Account</h2>
        </div>
        <div className="row clearfix" >
          <div>
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-user" />
                </span>
                <input
                  type="displayName"
                  name="displayName"
                  placeholder="displayName"
                  required
                  onChange={handleChange}
                  value={displayName}
                />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-envelope" />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-lock" />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  value={password}
                />
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-lock" />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                  value={confirmPassword}
                />
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-user" />
                    </span>
                    <input type="text" name="name" placeholder="First Name" />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-user" />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="input_field radio_option">
                <input type="radio" name="radiogroup1" id="rd1" />
                <label htmlFor="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2" />
                <label htmlFor="rd2">Female</label>
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="select_arrow" />
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">I agree with terms and conditions</label>
              </div>
              <div className="input_field checkbox_option">
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">I want to receive the newsletter</label>
              </div>
              <button type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
