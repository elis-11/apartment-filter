import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import "./AuthPage.scss";

const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/registration",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth">
              <Route path="/login">
                <h3>Autorization</h3>
                <form
                  className="form form-login"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn grey">
                      Login
                    </button>
                    <Link to="/registration" className="btn-outline btn-reg">
                      Don't you have an account?
                    </Link>
                  </div>
                </form>
              </Route>

              <Route path="/registration">
                <h3>Register</h3>
                <form
                  className="form form-login"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="wawes-effect wawes-light btn grey"
                      onClick={registerHandler}
                    >
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

export default AuthPage;

// 47:02
