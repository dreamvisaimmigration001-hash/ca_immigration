import React from 'react';

export default function GCKeyLogin() {
  return (
    <main role="main" property="mainContentOfPage">
            <div className="row">
              <div className="col-xs-12">
                <h1 id="wb-cont">Welcome to GCKey</h1>
                <noscript>
                  <div className="row nojs-show">
                    <div className="col-xs-12">
                      <div className="alert alert-warning">
                        <p>
                          GCKey login requires that your JavaScript function be
                          enabled in your browser settings. Please enable
                          JavaScript to proceed.
                        </p>
                      </div>
                    </div>
                  </div>
                </noscript>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="margin-top-medium">
                  <div className="panel panel-default login-panel">
                    <div className="panel-body" style={{ paddingTop: "27px" }}>
                      <div className="row">
                        <div className="wb-sec hidden-md hidden-lg col-xs-12">
                          <div className="col-xs-12">
                            <h2 style={{ marginTop: "0" }}>
                              Simple Secure Access
                            </h2>
                            <p>
                              A simple way to securely access Government of
                              Canada online services.
                            </p>
                            <p></p>
                            <ul style={{ paddingLeft: "0px" }}>
                              <li style={{ listStyle: "none" }}>
                                One username.
                              </li>
                              <li style={{ listStyle: "none" }}>
                                One password.
                              </li>
                            </ul>
                            <p>
                              Your GCKey can be used to access multiple
                              Government of Canada online{" "}
                              <a
                                href="/ES-01"
                                target="_blank"
                                title="Enabled Services (opens in a new window)"
                              >
                                Enabled Services
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                        <div id="left-box" className="col-md-8 col-xs-12">
                          <div className="col-xs-12">
                            <h2 style={{ marginTop: "0" }}>Sign In</h2>
                          </div>
                          <div className="col-xs-12">
                            <form
                              autoComplete="off"
                              role="form"
                              id="login"
                              method="post"
                              action="/j/eng/gckey_login"
                            >
                              <div className="form-group">
                                <label htmlFor="token1">
                                  <span className="field-name">
                                    Username: <strong>(required)</strong>
                                  </span>
                                </label>

                                <input
                                  type="text"
                                  className="form-control ho01e1"
                                  id="token1"
                                  name="token1"
                                  placeholder="Username"
                                  title="Mandatory - Enter your username."
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="token2">
                                  <span className="field-name">
                                    Password: <strong>(required)</strong>
                                  </span>
                                </label>

                                <input
                                  type="password"
                                  className="form-control ho01e2"
                                  id="token2"
                                  name="token2"
                                  placeholder="Password"
                                  title="Mandatory - Enter your password."
                                />
                              </div>
                              <div className="form-group form-buttons">
                                <div style={{ textAlign: "center" }}>
                                  <button
                                    type="submit"
                                    id="button"
                                    className="btn btn-primary"
                                    title="Connect to the GCKey service"
                                    style={{
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                  >
                                    Sign In
                                  </button>
                                  <input
                                    type="submit"
                                    className="btn btn-default cancel"
                                    name="clearAll"
                                    id="button2"
                                    value="Clear All"
                                    title="Information entered will be cleared"
                                    style={{
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                  />
                                  <a
                                    href="/j/eng/rg"
                                    id="signUpButtonMobile"
                                    className="btn btn-primary visible-xs visible-sm"
                                    style={{
                                      margin: "5px",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                    title="Sign Up / Register for a new GCKey"
                                  >
                                    Sign Up
                                  </a>
                                </div>
                              </div>
                              <input
                                type="hidden"
                                id="captcha-token"
                                name="captcha-token"
                              />
                              <input
                                type="hidden"
                                id="captcha-error"
                                name="captcha-error"
                              />
                              <input
                                type="hidden"
                                name="_csrf"
                                value="d1abe798-1c5b-4ed0-b162-805f9f43f20b"
                              />
                            </form>
                          </div>
                          <div className="col-xs-12 text-center">
                            <a
                              className="mrgn-tp-sm visible-xs-block visible-sm-block visible-md-inline visible-lg-inline"
                              href="/fu"
                              id="forgotUsernameLink"
                              title="Forgot your username?"
                            >
                              Forgot your username?
                            </a>
                            <span className="mrgn-lft-md mrgn-rght-md hidden-sm hidden-xs">
                              •
                            </span>
                            <a
                              className="mrgn-tp-sm visible-xs-block visible-sm-block visible-md-inline visible-lg-inline"
                              href="/fp"
                              id="forgotPasswordLink"
                              title="Forgot your password? Reset it here."
                            >
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                        <div className="wb-sec col-md-4 hidden-xs hidden-sm">
                          <div className="col-xs-12">
                            <h2 style={{ marginTop: "0" }}>
                              Simple Secure Access
                            </h2>
                            <p>
                              A simple way to securely access Government of
                              Canada online services.
                            </p>
                            <p></p>
                            <ul style={{ paddingLeft: "0px" }}>
                              <li style={{ listStyle: "none" }}>
                                One username.
                              </li>
                              <li style={{ listStyle: "none" }}>
                                One password.
                              </li>
                            </ul>
                            <p
                              style={{
                                textAlign: "center",
                                marginTop: "20px",
                                marginBottom: "20px",
                              }}
                            >
                              <a
                                href="/j/eng/rg"
                                id="signUpButton"
                                className="btn btn-primary"
                                style={{ width: "13em" }}
                                title="Sign Up / Register for a new GCKey"
                              >
                                Sign Up
                              </a>
                            </p>
                            <p>
                              Your GCKey can be used to access multiple
                              Government of Canada online{" "}
                              <a
                                id="enabledServicesLink"
                                href="/ES-01"
                                target="_blank"
                                title="Enabled Services (opens in a new window)"
                              >
                                Enabled Services
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="col-xs-12">
                  <div className="col-xs-12">
                    <div className="text-center">
                      <p>
                        Please select <strong>Exit</strong> to leave the GCKey
                        service and return to the Government of Canada online
                        service.
                      </p>
                      <form
                        autoComplete="off"
                        action="/j/eng/exit/ssoExit"
                        method="post"
                      >
                        <div
                          className="form-buttons"
                          style={{ textAlign: "center" }}
                        >
                          <input
                            type="submit"
                            className="btn btn-default cancel"
                            title="Exit the GCKey service"
                            name="Exit"
                            id="Exit"
                            value="Exit"
                            style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagedetails">
              <div className="datemod">
                <dl id="wb-dtmd" role="contentinfo">
                  <dt>Date modified:</dt>
                  <dd>
                    <time property="dateModified">2026-01-18</time>
                  </dd>
                </dl>
              </div>
            </div>
          </main>
  );
}
