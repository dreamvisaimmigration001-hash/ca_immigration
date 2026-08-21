import React from 'react';

export default function GCKeyForgotUsername() {
  return (
    <main role="main" property="mainContentOfPage">
            <h1 id="wb-cont">Recover Username Step 1 of 2</h1>
            <noscript>
              <div className="row nojs-show">
                <div className="col-xs-12">
                  <div className="alert alert-warning">
                    <p>
                      GCKey login requires that your JavaScript function be enabled in your browser settings. Please enable JavaScript to proceed.
                    </p>
                  </div>
                </div>
              </div>
            </noscript>

            <div className="row">
              <div className="col-md-8">
                <form autoComplete="off" id="login" method="post" action="/j/eng/fu?execution=e2s1">
                  <p>
                    Enter the email address associated with your account. We will send you an email with your username.
                  </p>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address: <strong>(required)</strong>
                    </label>

                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control noClearOnError emailValidation"
                      title="Mandatory - Enter your Email Address."
                    />
                  </div>
                  <p>
                    Please select <strong>Continue</strong> to proceed or select <strong>Cancel</strong> to end this process.
                  </p>
                  <div className="form-group form-buttons">
                    <p style={{ textAlign: "center" }}>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        name="_eventId_submit"
                        id="button"
                        value="Continue"
                        title="Submit your data and continue the process"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />{" "}
                      <input
                        type="submit"
                        className="btn btn-default cancel"
                        name="_eventId_reset"
                        id="button2"
                        value="Clear All"
                        title="Information entered will be cleared"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />{" "}
                      <input
                        type="submit"
                        className="btn btn-default cancel"
                        name="_eventId_cancel"
                        id="button3"
                        value="Cancel"
                        title="Cancel the process"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="row col-md-12 pagedetails">
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
