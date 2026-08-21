import React from "react";
import "./GCKeyLogin.css";
import sigBlkEn from "../assets/sig-blk-en.svg";
import wmmsBlk from "../assets/wmms-blk.svg";

export default function GCKeyLogin() {
  return (
    <>
      <div className="gckey-page">
        <ul id="wb-tphp" className="wb-init wb-disable-inited">
          <li className="wb-slc">
            <a className="wb-sl" id="skip-main" href="#wb-cont">
              Skip to main content
            </a>
          </li>
          <li className="wb-slc visible-md visible-lg">
            <a className="wb-sl" id="skip-footer" href="#wb-info">
              Skip to footer
            </a>
          </li>
          <li className="wb-slc">
            <a className="wb-sl" href="?wbdisable=true">
              Basic HTML version
            </a>
          </li>
        </ul>
        <header role="banner">
          <div id="wb-bnr" className="container">
            <div id="wb-lng" className="visible-md visible-lg text-right">
              <h2 className="wb-inv">Language selection</h2>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-inline margin-bottom-none">
                    <li>
                      <a lang="fr" id="languageLink" href="/j/fra/l">
                        Français
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="brand col-xs-7 col-sm-9">
                <a
                  id="logo-link"
                  href="/en/index"
                  target="_blank"
                  title="Welcome to Canada.ca (opens in a new window)"
                >
                  <object id="gcwu-sig" type="image/svg+xml" tabIndex="-1" role="img" data={sigBlkEn} aria-label="Government of Canada"></object>
                </a>
              </div>
              <div
                className="wb-mb-links col-xs-5 col-sm-3 visible-sm visible-xs"
                id="wb-glb-mn"
              >
                <h2 className="wb-inv">Menu</h2>
                <ul className="list-inline text-right chvrn">
                  <li>
                    <a
                      id="menu-button"
                      href="#mb-pnl"
                      title="Menu"
                      aria-controls="mb-pnl"
                      className="overlay-lnk"
                      role="button"
                    >
                      <span className="glyphicon glyphicon-th-list">
                        <span className="wb-inv">Menu</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div
                  id="mb-pnl"
                  className=" wb-overlay modal-content overlay-def wb-panel-r wb-overlay-inited"
                  aria-hidden="true"
                >
                  <header className="modal-header">
                    <div className="modal-title">Menu</div>
                  </header>
                  <div className="modal-body">
                    <section className="lng-ofr">
                      <h3>Language selection</h3>
                      <ul className="list-inline">
                        <li>
                          <a
                            lang="fr"
                            id="languageLink"
                            href="/j/fra/l"
                          >
                            Français
                          </a>
                        </li>
                      </ul>
                    </section>
                    <nav
                      role="navigation"
                      typeof="SiteNavigationElement"
                      id="sm-pnl"
                      className="sm-pnl wb-menu wb-menu-inited wb-init wb-navcurr-inited"
                    >
                      <h3>Site menu</h3>
                      <ul className="list-unstyled mb-menu" role="menu">
                        <li className="no-sect">
                          <a
                            className="mb-item"
                            role="menuitem"
                            aria-setsize="3"
                            aria-posinset="1"
                            tabIndex="0"
                            id="definitionsHeaderLink"
                            href="/DE-01"
                            target="_blank"
                            title="Definitions (opens in a new window)"
                          >
                            Definitions
                          </a>
                        </li>
                        <li className="no-sect">
                          <a
                            className="mb-item"
                            role="menuitem"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabIndex="-1"
                            id="faqHeaderLink"
                            href="/FQ-01"
                            target="_blank"
                            title="Frequently Asked Questions (FAQs) (opens in a new window)"
                          >
                            Frequently Asked Questions (FAQ)
                          </a>
                        </li>
                        <li className="no-sect">
                          <a
                            className="mb-item"
                            role="menuitem"
                            aria-setsize="3"
                            aria-posinset="3"
                            tabIndex="-1"
                            id="helpHeaderLink"
                            href="/HP-01#logon"
                            target="_blank"
                            title="Help (opens in a new window)"
                          >
                            Help
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <nav
                      role="navigation"
                      typeof="SiteNavigationElement"
                      id="info-pnl"
                      className="info-pnl wb-menu wb-menu-inited wb-init"
                    >
                      <h3>Site Information</h3>
                      <ul className="list-unstyled mb-menu" role="menu">
                        <li>
                          <details>
                            <summary
                              className="mb-item"
                              role="menuitem"
                              aria-setsize="4"
                              aria-posinset="1"
                              aria-haspopup="true"
                              tabIndex="0"
                            >
                              About
                            </summary>
                            <ul
                              className="list-unstyled mb-sm"
                              role="menu"
                              aria-expanded="false"
                              aria-hidden="true"
                            >
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="3"
                                  aria-posinset="1"
                                  tabIndex="-1"
                                  id="aboutFooterLink"
                                  href="/AB-01"
                                  target="_blank"
                                >
                                  About GCKey
                                </a>
                              </li>
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="3"
                                  aria-posinset="2"
                                  tabIndex="-1"
                                  id="enabledServicesFooterLink"
                                  href="/ES-01"
                                  target="_blank"
                                >
                                  Enabled Services
                                </a>
                              </li>
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="3"
                                  aria-posinset="3"
                                  tabIndex="-1"
                                  id="siteMapFooterLink"
                                  href="/SM-01"
                                  target="_blank"
                                >
                                  Site Map
                                </a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <details>
                            <summary
                              className="mb-item"
                              role="menuitem"
                              aria-setsize="4"
                              aria-posinset="2"
                              aria-haspopup="true"
                              tabIndex="-1"
                            >
                              Transparency
                            </summary>
                            <ul
                              className="list-unstyled mb-sm"
                              role="menu"
                              aria-expanded="false"
                              aria-hidden="true"
                            >
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="2"
                                  aria-posinset="1"
                                  tabIndex="-1"
                                  id="disclosureFooterLink"
                                  href="/pd-dp/gr-rg/index-eng"
                                  target="_blank"
                                >
                                  Proactive Disclosure
                                </a>
                              </li>
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="2"
                                  aria-posinset="2"
                                  tabIndex="-1"
                                  id="termsFooterLink"
                                  href="/IN-01"
                                  rel="license"
                                  target="_blank"
                                >
                                  Terms and Conditions
                                </a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <details>
                            <summary
                              className="mb-item"
                              role="menuitem"
                              aria-setsize="4"
                              aria-posinset="3"
                              aria-haspopup="true"
                              tabIndex="-1"
                            >
                              Contact Us
                            </summary>
                            <ul
                              className="list-unstyled mb-sm"
                              role="menu"
                              aria-expanded="false"
                              aria-hidden="true"
                            >
                              <li>
                                <a
                                  role="menuitem"
                                  aria-setsize="1"
                                  aria-posinset="1"
                                  tabIndex="-1"
                                  id="contactFooterLink"
                                  href="/CU-01"
                                  target="_blank"
                                >
                                  Phone Numbers
                                </a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li className="no-sect">
                          <a
                            className="mb-item"
                            role="menuitem"
                            aria-setsize="4"
                            aria-posinset="4"
                            tabIndex="-1"
                            href="#wb-cont"
                          >
                            Top of Page{" "}
                            <span className="glyphicon glyphicon-chevron-up"></span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button
                    className="mfp-close overlay-close"
                    title="Close: Menu (escape key)"
                  >
                    ×<span className="wb-inv"> Close: Menu (escape key)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav
            role="navigation"
            id="wb-sm"
            className="wb-menu visible-md visible-lg wb-init wb-menu-inited wb-navcurr-inited"
            data-trgt="mb-pnl"
            typeof="SiteNavigationElement"
          >
            <h2 className="wb-inv">Site menu</h2>
            <div className="container visible-md visible-lg nvbar">
              <div className="row">
                <ul className="list-inline menu" role="menubar">
                  <li>
                    <a
                      id="definitionsHeaderLink"
                      href="/DE-01"
                      target="_blank"
                      title="Definitions (opens in a new window)"
                      tabIndex="0"
                      aria-posinset="1"
                      aria-setsize="3"
                      role="menuitem"
                    >
                      Definitions
                    </a>
                  </li>
                  <li>
                    <a
                      id="faqHeaderLink"
                      href="/FQ-01"
                      target="_blank"
                      title="Frequently Asked Questions (FAQs) (opens in a new window)"
                      tabIndex="-1"
                      aria-posinset="2"
                      aria-setsize="3"
                      role="menuitem"
                    >
                      Frequently Asked Questions (FAQ)
                    </a>
                  </li>
                  <li className="last">
                    <a
                      id="helpHeaderLink"
                      href="/HP-01#logon"
                      target="_blank"
                      title="Help (opens in a new window)"
                      tabIndex="-1"
                      aria-posinset="3"
                      aria-setsize="3"
                      role="menuitem"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav role="navigation" id="wb-bc" property="breadcrumb">
            <h2 className="wb-inv">You are here:</h2>
            <div className="container">
              <div className="row">
                <ol className="breadcrumb">
                  <li>Home</li>
                  <li>Sign In / Sign Up</li>
                </ol>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
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
        </div>
        <footer role="contentinfo" id="wb-info">
          <nav
            role="navigation"
            className="container visible-lg visible-md wb-navcurr"
          >
            <h2 className="wb-inv">Site Information</h2>
            <div className="row">
              <section className="col-sm-3 col-lg-3">
                <h3>About</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      id="aboutFooterLink"
                      href="/AB-01"
                      target="_blank"
                    >
                      About GCKey
                    </a>
                  </li>
                  <li>
                    <a
                      id="enabledServicesFooterLink"
                      href="/ES-01"
                      target="_blank"
                    >
                      Enabled Services
                    </a>
                  </li>
                  <li>
                    <a
                      id="siteMapFooterLink"
                      href="/SM-01"
                      target="_blank"
                    >
                      Site Map
                    </a>
                  </li>
                </ul>
              </section>
              <section className="col-sm-3 col-lg-3">
                <h3>Transparency</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      id="disclosureFooterLink"
                      href="/pd-dp/gr-rg/index-eng"
                      target="_blank"
                    >
                      Proactive Disclosure
                    </a>
                  </li>
                  <li>
                    <a
                      id="termsFooterLink"
                      href="/IN-01"
                      rel="license"
                      target="_blank"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </section>
              <div className="col-sm-3 col-lg-3">
                <section>
                  <h3>Contact Us</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        id="contactFooterLink"
                        href="/CU-01"
                        target="_blank"
                      >
                        Phone Numbers
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </nav>
          <div className="brand">
            <div className="container">
              <div className="row ">
                <div className="col-xs-6 col-sm-6 visible-sm visible-xs tofpg">
                  <a id="topOfPageFooterLink" href="#wb-cont">
                    Top of Page{" "}
                    <span className="glyphicon glyphicon-chevron-up"></span>
                  </a>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-12 text-right">
                  <object id="wmms" type="image/svg+xml" tabIndex="-1" role="img" data={wmmsBlk} aria-label="Symbol of the Government of Canada"></object>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
