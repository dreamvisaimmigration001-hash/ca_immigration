import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import GlobalMenu from './GlobalMenu';

export default function Header() {
  const { pathname } = useLocation();
  
  return (
    <div className="root">
      <div className="cmp-container">
        <div>
          <div>
            <div
              id="experiencefragment-5e7d87bbaa"
              className="cmp-experiencefragment cmp-experiencefragment--header"
            >
              <div className="xf-content-height">
                <div className="cmp-container">
                  <div className="global-header">
                    <nav>
                      <ul id="wb-tphp" className="wb-init wb-disable-inited">
                        <li className="wb-slc">
                          <a className="wb-sl" href="#wb-cont">
                            Skip to main content
                          </a>
                        </li>
                        <li className="wb-slc">
                          <a className="wb-sl" href="#wb-info">
                            Skip to "About government"
                          </a>
                        </li>
                        <li className="wb-slc">
                          <a
                            className="wb-sl"
                            href="?wbdisable=true"
                            rel="alternate"
                          >
                            Switch to basic HTML version
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <header>
                      <div id="wb-bnr" className="container">
                        <div className="row">
                          <section
                            id="wb-lng"
                            className="col-xs-3 col-sm-12 pull-right text-right"
                          >
                            <h2 className="wb-inv">Language selection</h2>
                            <div className="row">
                              <div className="col-md-12">
                                <ul className="list-inline mrgn-bttm-0">
                                  <li>
                                    <Link to="/fr">
                                      <span className="hidden-xs">Français</span>
                                      <abbr
                                        title="Français"
                                        className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                                      >
                                        fr
                                      </abbr>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </section>
                          <div
                            className="brand col-xs-9 col-sm-5 col-md-4"
                            property="publisher"
                            resource="#wb-publisher"
                            typeof="GovernmentOrganization"
                          >
                            <Link to="/" property="url">
                              <img
                                src="/assets/sig-blk-en.svg"
                                alt="Government of Canada"
                                property="logo"
                              />
                              <span className="wb-inv">
                                <span lang="fr">Gouvernement du Canada</span>
                              </span>
                            </Link>
                            <meta
                              property="name"
                              content="Government of Canada"
                            />
                            <meta
                              property="areaServed"
                              typeof="Country"
                              content="Canada"
                            />
                            <link
                              property="logo"
                              href="/assets/wmms-blk.svg"
                            />
                          </div>
                          <section
                            id="wb-srch"
                            className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
                          >
                            <h2>Search</h2>
                            <form
                              action="/search"
                              method="get"
                              name="cse-search-box"
                              role="search"
                            >
                              <div className="form-group wb-srch-qry">
                                <label htmlFor="wb-srch-q" className="wb-inv">
                                  Search IRCC
                                </label>
                                <input
                                  id="wb-srch-q"
                                  list="wb-srch-q-ac"
                                  className="wb-srch-q form-control"
                                  name="q"
                                  type="search"
                                  defaultValue=""
                                  size="34"
                                  maxLength="170"
                                  placeholder="Search IRCC"
                                />
                                <datalist id="wb-srch-q-ac"></datalist>
                              </div>
                              <div className="form-group submit">
                                <button
                                  type="submit"
                                  id="wb-srch-sub"
                                  className="btn btn-primary btn-small"
                                  name="wb-srch-sub"
                                >
                                  <Search className="glyphicon" size={16} />
                                  <span className="wb-inv">Search</span>
                                </button>
                              </div>
                            </form>
                          </section>
                        </div>
                      </div>
                      <hr />

                      {pathname.startsWith('/immigration-refugees-citizenship/services/application/check-status') ? (
                        <div className="container">
                          <div className="row">
                            <div className="col-md-8">
                              <GlobalMenu />
                            </div>
                            <div className="col-xs-offset-6 col-xs-6 col-md-offset-0 col-md-4">
                              <section id="wb-so">
                                <h2 className="wb-inv">Sign in</h2>
                                <Link
                                  className="btn btn-primary"
                                  to="/sign-in"
                                >
                                  <span className="visible-xs">IRCC sign in</span>
                                  <span className="hidden-xs">IRCC sign in</span>
                                </Link>
                              </section>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="container">
                          <div className="row">
                            <div className="col-xs-12">
                              <section id="wb-so">
                                <h2 className="wb-inv">Sign in</h2>
                                <Link
                                  className="btn btn-primary"
                                  to="/sign-in"
                                >
                                  <span className="visible-xs">IRCC sign in</span>
                                  <span className="hidden-xs">IRCC sign in</span>
                                </Link>
                              </section>
                            </div>
                          </div>
                        </div>
                      )}

                      <nav id="wb-bc" property="breadcrumb">
                        <h2 className="wb-inv">You are here:</h2>
                        <div className="container">
                          <ol className="breadcrumb">
                            <li>
                              <Link to="/">Canada.ca</Link>
                            </li>
                            {pathname.startsWith('/immigration-refugees-citizenship/services/application') && (
                              <li>
                                <Link to="/services/immigration-citizenship">Immigration and citizenship</Link>
                              </li>
                            )}
                            {pathname === '/immigration-refugees-citizenship/services/application/check-status' && (
                              <li>
                                <Link to="#">Your IRCC application</Link>
                              </li>
                            )}
                          </ol>
                        </div>
                      </nav>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
