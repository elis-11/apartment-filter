import React from "react";
import './Auth.scss'

const Auth = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="auth">
          <h3>Autorization</h3>
          <form className="form form-login">
            <div className="row">
              <div className="input-field col s12">
                <input type="text" name="email" className="validation" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" name="password" className="validation" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="wawes-effect wawes-light btn grey">
                Login
              </button>
              <a href="/" className="btn-outline btn-reg">Don't you have an account?</a>
            </div>
          </form>
          <h3>Register</h3>
          <form className="form form-login">
            <div className="row">
              <div className="input-field col s12">
                <input type="text" name="email" className="validation" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" name="password" className="validation" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="wawes-effect wawes-light btn grey">
                Register
              </button>
              <a href="/" className="btn-outline btn-reg">Don't you have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
