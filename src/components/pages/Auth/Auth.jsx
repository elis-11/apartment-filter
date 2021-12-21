import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import "./Auth.scss";

const Auth = () => {
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth">

              <Route path="/login">
                <h3>Autorization</h3>
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name="email" className="validation" />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validation"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn grey">
                      Login
                    </button>
                    <Link to="/register" className="btn-outline btn-reg">
                      Don't you have an account?
                    </Link>
                  </div>
                </form>
              </Route>

              <Route path="/register">
                <h3>Register</h3>
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="text" name="email" className="validation" />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validation"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn grey">
                      Register
                    </button>
                    <Link to="/login" className="btn-outline btn-reg">
                      Do you have an account?
                    </Link>
                  </div>
                </form>
              </Route>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default Auth;
