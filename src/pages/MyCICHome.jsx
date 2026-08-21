import React, { useState } from "react";
import { Link } from "react-router-dom";
import DelayedLink from "../components/DelayedLink";
import SEO from "../components/SEO";

export default function MyCICHome() {
  // Submitted Applications State
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [submittedEntriesPerPage, setSubmittedEntriesPerPage] = useState(5);
  const [submittedSort, setSubmittedSort] = useState({
    column: "dateSubmitted",
    direction: "desc",
  });
  const [submittedData, setSubmittedData] = useState([
    {
      appType: "Work Permit",
      appNumber: "V353410701",
      applicantName: "BIKASH SINGH GAJMER",
      dateSubmitted: "August 14, 2026",
      status: "In progress - Background check",
      messages: "0 messages",
    },
    // {
    //   appType: 'Express Entry - Federal Skilled Worker',
    //   appNumber: 'E009481023',
    //   applicantName: 'Oluwaseun Webinar',
    //   dateSubmitted: 'June 02, 2026',
    //   status: 'Submitted - Under review',
    //   messages: 'Unread (1)',
    // },
    // {
    //   appType: 'Work Permit (Open Work Permit)',
    //   appNumber: 'W301948271',
    //   applicantName: 'Oluwaseun Webinar',
    //   dateSubmitted: 'March 20, 2026',
    //   status: 'Approved',
    //   messages: 'Read (4)',
    // },
  ]);

  // Unsubmitted Applications State
  const [unsubmittedSearch, setUnsubmittedSearch] = useState("");
  const [unsubmittedEntriesPerPage, setUnsubmittedEntriesPerPage] = useState(5);
  const [unsubmittedSort, setUnsubmittedSort] = useState({
    column: "dateCreated",
    direction: "desc",
  });
  const [unsubmittedData, setUnsubmittedData] = useState([
    // {
    //   appType: 'Study Permit Extension',
    //   dateCreated: 'August 10, 2026',
    //   daysLeft: '50 days',
    //   dateSaved: 'August 18, 2026',
    // },
    // {
    //   appType: 'Post-Graduation Work Permit (PGWP)',
    //   dateCreated: 'August 01, 2026',
    //   daysLeft: '41 days',
    //   dateSaved: 'August 15, 2026',
    // },
  ]);

  // Helper to render sort arrows
  const renderSortIndicator = (currentSort, colKey) => {
    const isActive = currentSort.column === colKey;
    if (isActive) {
      return (
        <span style={{ marginLeft: "4px", fontWeight: "bold", color: "#000" }}>
          {currentSort.direction === "asc" ? "▲" : "↓"}
        </span>
      );
    }
    return (
      <span style={{ marginLeft: "4px", fontWeight: "normal", color: "#666" }}>
        ⇂↾
      </span>
    );
  };

  const handleSubmittedSort = (colKey) => {
    if (submittedSort.column === colKey) {
      setSubmittedSort({
        column: colKey,
        direction: submittedSort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSubmittedSort({ column: colKey, direction: "desc" });
    }
  };

  const handleUnsubmittedSort = (colKey) => {
    if (unsubmittedSort.column === colKey) {
      setUnsubmittedSort({
        column: colKey,
        direction: unsubmittedSort.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setUnsubmittedSort({ column: colKey, direction: "desc" });
    }
  };

  // Filtered data
  const filteredSubmitted = submittedData.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(submittedSearch.toLowerCase()),
    ),
  );

  const filteredUnsubmitted = unsubmittedData.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(unsubmittedSearch.toLowerCase()),
    ),
  );

  return (
    <div className="gckey-page">
      <SEO
        title="MyCIC Account Dashboard"
        description="Manage your IRCC applications, continue saved draft forms, apply for Canadian visas, and view status history in your secure MyCIC account."
        keywords="MyCIC account, IRCC dashboard, GCKey portal, Canada visa application, check status, continue application"
      />

      <div
        className="container"
        style={{
          minHeight: "600px",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        <main role="main" property="mainContentOfPage">
          {/* Account Title */}
          <div className="row">
            <div className="col-xs-12">
              <h1
                id="wb-cont"
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#26374a",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                ChatWithOlu Webinar's account
              </h1>
              <div
                style={{
                  borderBottom: "2px solid #af3c43",
                  marginBottom: "25px",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>

          {/* SECTION 1: View the applications you submitted */}
          <section style={{ marginBottom: "35px" }}>
            <div className="row">
              <div className="col-xs-12">
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#26374a",
                    marginTop: "0",
                    marginBottom: "6px",
                  }}
                >
                  View the applications you submitted
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#333333",
                    marginBottom: "15px",
                  }}
                >
                  Review, check the status or read messages about your submitted
                  application.
                </p>
              </div>
            </div>

            {/* Controls Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <label
                  htmlFor="submitted-search"
                  style={{ fontWeight: "bold", marginBottom: "0" }}
                >
                  Search:
                </label>
                <input
                  id="submitted-search"
                  type="text"
                  value={submittedSearch}
                  onChange={(e) => setSubmittedSearch(e.target.value)}
                  style={{
                    border: "1px solid #aaa",
                    padding: "3px 8px",
                    fontSize: "14px",
                    width: "180px",
                    height: "30px",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>
                  Showing {filteredSubmitted.length === 0 ? 0 : 1} to{" "}
                  {filteredSubmitted.length} of {filteredSubmitted.length}{" "}
                  entries
                </span>
                <span style={{ margin: "0 4px", color: "#888" }}>|</span>
                <label
                  htmlFor="submitted-entries"
                  style={{ fontWeight: "bold", marginBottom: "0" }}
                >
                  Show
                </label>
                <select
                  id="submitted-entries"
                  value={submittedEntriesPerPage}
                  onChange={(e) =>
                    setSubmittedEntriesPerPage(Number(e.target.value))
                  }
                  style={{
                    border: "1px solid #aaa",
                    padding: "2px 6px",
                    fontSize: "14px",
                    height: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "0",
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>entries</span>
              </div>
            </div>

            {/* Table 1 */}
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid #ccc", color: "#222" }}>
                    <th
                      onClick={() => handleSubmittedSort("appType")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "appType"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Application type{" "}
                      {renderSortIndicator(submittedSort, "appType")}
                    </th>
                    <th
                      onClick={() => handleSubmittedSort("appNumber")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "appNumber"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Application number{" "}
                      {renderSortIndicator(submittedSort, "appNumber")}
                    </th>
                    <th
                      onClick={() => handleSubmittedSort("applicantName")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "applicantName"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Applicant name{" "}
                      {renderSortIndicator(submittedSort, "applicantName")}
                    </th>
                    <th
                      onClick={() => handleSubmittedSort("dateSubmitted")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "dateSubmitted"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Date submitted{" "}
                      {renderSortIndicator(submittedSort, "dateSubmitted")}
                    </th>
                    <th
                      onClick={() => handleSubmittedSort("status")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "status"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Current status{" "}
                      {renderSortIndicator(submittedSort, "status")}
                    </th>
                    <th
                      onClick={() => handleSubmittedSort("messages")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          submittedSort.column === "messages"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Messages {renderSortIndicator(submittedSort, "messages")}
                    </th>
                    <th
                      style={{
                        padding: "8px 10px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmitted.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          color: "#555",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        No data available in table
                      </td>
                    </tr>
                  ) : (
                    filteredSubmitted.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.appType}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.appNumber}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.applicantName}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.dateSubmitted}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.status}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.messages}
                        </td>
                        <td style={{ padding: "8px 10px" }}>
                          <DelayedLink
                            to="/mycic/dashboard"
                            style={{
                              color: "#284162",
                              textDecoration: "underline",
                            }}
                          >
                            View full application status
                          </DelayedLink>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: "10px", fontSize: "13px", color: "#333" }}>
              Did you apply on paper or don't see your online application in
              your account?{" "}
              <DelayedLink
                style={{ color: "#284162", textDecoration: "underline" }}
              >
                Add (link) your application to your account
              </DelayedLink>{" "}
              to access it and check your status online.
            </p>
          </section>

          {/* SECTION 2: Continue an application you haven't submitted */}
          <section style={{ marginBottom: "40px" }}>
            <div className="row">
              <div className="col-xs-12">
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#26374a",
                    marginTop: "0",
                    marginBottom: "6px",
                  }}
                >
                  Continue an application you haven't submitted
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#333333",
                    marginBottom: "15px",
                  }}
                >
                  Continue working on an application or profile you haven't
                  submitted or delete it from your account.
                </p>
              </div>
            </div>

            {/* Controls Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <label
                  htmlFor="unsubmitted-search"
                  style={{ fontWeight: "bold", marginBottom: "0" }}
                >
                  Search:
                </label>
                <input
                  id="unsubmitted-search"
                  type="text"
                  value={unsubmittedSearch}
                  onChange={(e) => setUnsubmittedSearch(e.target.value)}
                  style={{
                    border: "1px solid #aaa",
                    padding: "3px 8px",
                    fontSize: "14px",
                    width: "180px",
                    height: "30px",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span>
                  Showing {filteredUnsubmitted.length === 0 ? 0 : 1} to{" "}
                  {filteredUnsubmitted.length} of {filteredUnsubmitted.length}{" "}
                  entries
                </span>
                <span style={{ margin: "0 4px", color: "#888" }}>|</span>
                <label
                  htmlFor="unsubmitted-entries"
                  style={{ fontWeight: "bold", marginBottom: "0" }}
                >
                  Show
                </label>
                <select
                  id="unsubmitted-entries"
                  value={unsubmittedEntriesPerPage}
                  onChange={(e) =>
                    setUnsubmittedEntriesPerPage(Number(e.target.value))
                  }
                  style={{
                    border: "1px solid #aaa",
                    padding: "2px 6px",
                    fontSize: "14px",
                    height: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "0",
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span>entries</span>
              </div>
            </div>

            {/* Table 2 */}
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "2px solid #ccc", color: "#222" }}>
                    <th
                      onClick={() => handleUnsubmittedSort("appType")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          unsubmittedSort.column === "appType"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Application type{" "}
                      {renderSortIndicator(unsubmittedSort, "appType")}
                    </th>
                    <th
                      onClick={() => handleUnsubmittedSort("dateCreated")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          unsubmittedSort.column === "dateCreated"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Date Created{" "}
                      {renderSortIndicator(unsubmittedSort, "dateCreated")}
                    </th>
                    <th
                      onClick={() => handleUnsubmittedSort("daysLeft")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          unsubmittedSort.column === "daysLeft"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Days left to submit{" "}
                      {renderSortIndicator(unsubmittedSort, "daysLeft")}
                    </th>
                    <th
                      onClick={() => handleUnsubmittedSort("dateSaved")}
                      style={{
                        padding: "8px 10px",
                        borderRight: "1px solid #ccc",
                        cursor: "pointer",
                        userSelect: "none",
                        backgroundColor:
                          unsubmittedSort.column === "dateSaved"
                            ? "#d9d9d9"
                            : "#fff",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Date last saved{" "}
                      {renderSortIndicator(unsubmittedSort, "dateSaved")}
                    </th>
                    <th
                      style={{
                        padding: "8px 10px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUnsubmitted.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          color: "#555",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        No data available in table
                      </td>
                    </tr>
                  ) : (
                    filteredUnsubmitted.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.appType}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.dateCreated}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.daysLeft}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          {row.dateSaved}
                        </td>
                        <td style={{ padding: "8px 10px" }}>
                          <button
                            style={{
                              color: "#284162",
                              textDecoration: "underline",
                              background: "none",
                              border: "none",
                              padding: 0,
                              marginRight: "10px",
                            }}
                          >
                            Continue
                          </button>
                          <button
                            style={{
                              color: "#d00000",
                              textDecoration: "underline",
                              background: "none",
                              border: "none",
                              padding: 0,
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: Start an application */}
          <section style={{ marginBottom: "30px" }}>
            <div className="row">
              <div className="col-xs-12">
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#26374a",
                    marginTop: "0",
                    marginBottom: "20px",
                  }}
                >
                  Start an application
                </h2>
              </div>
            </div>

            <div className="row">
              {/* Column 1: Apply to come to Canada */}
              <div
                className="col-md-4 col-sm-12"
                style={{ marginBottom: "25px" }}
              >
                <DelayedLink
                  to="/immigration-refugees-citizenship/services/application"
                  style={{
                    display: "block",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#284162",
                    textDecoration: "none",
                    lineHeight: "1.2",
                  }}
                >
                  Apply to come to Canada
                </DelayedLink>

                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#333333",
                    lineHeight: "1.45",
                  }}
                >
                  Includes applications for visitor visas, work and study
                  permits, Express Entry and International Experience Canada.
                  You will need your personal reference code if you have one.
                </p>
              </div>

              {/* Column 2: Refugees */}
              <div
                className="col-md-4 col-sm-12"
                style={{ marginBottom: "25px" }}
              >
                <DelayedLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#284162",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginBottom: "6px",
                  }}
                >
                  Refugees: Apply for temporary health care benefits
                </DelayedLink>
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#333333",
                    lineHeight: "1.45",
                  }}
                >
                  Use this application if you are a protected person or refugee
                  claimant who wants to apply for the Interim Federal Health
                  Program.
                </p>
              </div>

              {/* Column 3: Citizenship */}
              <div
                className="col-md-4 col-sm-12"
                style={{ marginBottom: "25px" }}
              >
                <DelayedLink
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#284162",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginBottom: "6px",
                  }}
                >
                  Citizenship: Apply for a search or proof of citizenship
                </DelayedLink>
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "13px",
                    color: "#333333",
                    lineHeight: "1.45",
                  }}
                >
                  Use this application to apply for proof of citizenship
                  (citizenship certificate) or to search citizenship records.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
