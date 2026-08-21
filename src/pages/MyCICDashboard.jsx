import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ClipboardList,
  FilePlus,
  Files,
  Users,
  Fingerprint,
  Search as SearchIcon,
  Scale,
  Download
} from 'lucide-react';

export default function MyCICDashboard() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Messages table states
  const [msgSearch, setMsgSearch] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const messagesList = [
    {
      id: 'MSG-101',
      subject: 'Original Passport Request',
      dateSent: 'December 20, 2024',
      dateRead: 'December 21, 2024',
      sender: 'Immigration, Refugees and Citizenship Canada',
      content: `Dear Moazamul Haque,\n\nThis is an Information Letter regarding your ongoing application (V309284019).\n\nPlease note that your application is currently under final administrative processing. No further action is required from you at this time.\n\nThank you,\nImmigration, Refugees and Citizenship Canada`,
    },
    // {
    //   id: 'MSG-102',
    //   subject: 'Request letter',
    //   dateSent: 'November 29, 2024',
    //   dateRead: 'November 30, 2024',
    //   sender: 'Immigration, Refugees and Citizenship Canada',
    //   content: `Dear Moazamul Haque,\n\nWe require additional details regarding your travel itinerary and contact information.\n\nPlease upload the requested details to your account or submit them via the IRCC Web form within 30 days.\n\nThank you,\nImmigration, Refugees and Citizenship Canada`,
    // },
    // {
    //   id: 'MSG-103',
    //   subject: 'Request letter',
    //   dateSent: 'October 17, 2024',
    //   dateRead: 'October 20, 2024',
    //   sender: 'Immigration, Refugees and Citizenship Canada',
    //   content: `Dear Moazamul Haque,\n\nThis letter is to request updated documentation regarding your application file V309284019.\n\nThank you for your prompt cooperation.\n\nImmigration, Refugees and Citizenship Canada`,
    // },
    // {
    //   id: 'MSG-104',
    //   subject: 'Invitation to Pre-arrival services',
    //   dateSent: 'June 25, 2024',
    //   dateRead: 'June 25, 2024',
    //   sender: 'IRCC Settlement Network',
    //   content: `Dear Moazamul Haque,\n\nYou are invited to access free online Pre-Arrival Settlement Services funded by Immigration, Refugees and Citizenship Canada (IRCC).\n\nThese services will help you prepare for living, working, and settling in Canada before your departure.\n\nSincerely,\nSettlement Network Canada`,
    // },
    // {
    //   id: 'MSG-105',
    //   subject: 'Medical Report - Section A Client identification and summary (IMM 1017E)',
    //   dateSent: 'June 25, 2024',
    //   dateRead: 'June 25, 2024',
    //   sender: 'IRCC Health Branch',
    //   content: `Dear Moazamul Haque,\n\nAttached is your official Medical Report - Section A Client Identification and Summary form (IMM 1017E).\n\nStatus: Passed / Completed.\nFile Ref: IMM-1017E-9928174\n\nImmigration, Refugees and Citizenship Canada`,
    // },
  ];

  // Filtering messages
  const filteredMessages = messagesList.filter((msg) =>
    msg.subject.toLowerCase().includes(msgSearch.toLowerCase()) ||
    msg.dateSent.toLowerCase().includes(msgSearch.toLowerCase()) ||
    msg.dateRead.toLowerCase().includes(msgSearch.toLowerCase())
  );

  return (
    <div className="gckey-page" style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'Noto Sans, sans-serif' }}>
      <SEO
        title="Application/profile details - Immigration, Refugees and Citizenship Canada"
        description="View status, messages, biometrics information and detailed application updates on your MyCIC account dashboard."
        keywords="MyCIC dashboard, IRCC application status, biometrics Canada visa, UCI number, application status and messages"
      />

      <div className="container" style={{ paddingTop: '10px', paddingBottom: '50px' }}>
        <main role="main" property="mainContentOfPage" id="wb-cont">
          
          {/* Main Title & Subtitle */}
          <div className="row" style={{ marginBottom: '15px' }}>
            <div className="col-xs-12">
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#26374a',
                  marginTop: '10px',
                  marginBottom: '10px',
                  lineHeight: '1.2',
                }}
              >
                Application status and messages
              </h1>
              <p style={{ fontSize: '15px', color: '#333333', marginBottom: '20px' }}>
                Check the status, review the details and read messages regarding your application.
              </p>
            </div>
          </div>

          {/* TWO SIDE-BY-SIDE CARDS: Application Status (Left) & Applicant Information (Right) */}
          <div className="row" style={{ marginBottom: '35px' }}>
            {/* Left Box: Application status */}
            <div className="col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  height: '100%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #ccc',
                    padding: '12px 18px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: '#26374a',
                  }}
                >
                  Application status
                </div>
                <div style={{ padding: '18px', fontSize: '15px', lineHeight: '1.5', color: '#333' }}>
                  <p style={{ marginBottom: '16px' }}>
                    We are processing your application. We will send you a message when there is an update or if we need more information from you.
                  </p>
                  <p style={{ fontWeight: 'bold', marginBottom: '6px', color: '#26374a' }}>
                    Latest update:
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Final decision - December 18, 2024:</strong> Your application is in progress. We will send you a message once the final decision has been made.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Box: Applicant Information */}
            <div className="col-md-6 col-sm-12" style={{ marginBottom: '20px' }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  height: '100%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #ccc',
                    padding: '12px 18px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: '#26374a',
                  }}
                >
                  Applicant Information
                </div>
                <div style={{ padding: '18px', fontSize: '14px', lineHeight: '1.7', color: '#333' }}>
                  <div>
                    <strong>Principal Applicant:</strong> Moazamul Haque
                  </div>
                  <div>
                    <strong>Unique Client Identifier (UCI):</strong> 110974109
                  </div>
                  <div>
                    <strong>Application Number:</strong> V309284019
                  </div>
                  <div>
                    <strong>Date Received:</strong> February 24, 2024
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <strong>Biometrics:</strong>
                    <ul style={{ margin: '4px 0 0 0', paddingLeft: '22px', color: '#333' }}>
                      <li>
                        <strong>Biometrics Number:</strong> 0001098481811919
                      </li>
                      <li>
                        <strong>Date of Biometrics Enrolment:</strong> June 19, 2024
                      </li>
                      <li>
                        <strong>Expiry Date:</strong> June 19, 2034
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: DETAILS ABOUT YOUR APPLICATION STATUS */}
          <section style={{ marginBottom: '35px' }}>
            <div className="row">
              <div className="col-xs-12">
                <h2
                  style={{
                    fontSize: '26px',
                    fontWeight: '700',
                    color: '#26374a',
                    marginTop: '5px',
                    marginBottom: '12px',
                  }}
                >
                  Details about your application status
                </h2>
                <p style={{ fontSize: '15px', color: '#333333', marginBottom: '25px', lineHeight: '1.5' }}>
                  When we get your application, there are a series of steps it may go through before we make a decision. Use the following table to find out the current status of each application step.
                </p>
              </div>
            </div>

            {/* Status List Matching Screenshot Exactly */}
            <div style={{ paddingLeft: '5px' }}>

              {/* 1. Review of eligibility */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ClipboardList size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Review of eligibility
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Review of eligibility"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>We are reviewing whether you meet the eligibility requirements.</li>
                </ul>
              </div>

              {/* 2. Review of medical results */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FilePlus size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Review of medical results
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Review of medical results"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>July 10, 2024 You passed the medical exam.</li>
                </ul>
              </div>

              {/* 3. Review of additional documents */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Files size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Review of additional documents
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Review of additional documents"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>December 3, 2024 We are reviewing the additional documents you provided.</li>
                </ul>
              </div>

              {/* 4. Interview */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Interview
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Interview"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>You do not need an interview. We will send you a message if this changes.</li>
                </ul>
              </div>

              {/* 5. Biometrics */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Fingerprint size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Biometrics
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Biometrics"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>We do not need your fingerprints. We will send you a message if this changes.</li>
                </ul>
              </div>

              {/* 6. Background check */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <SearchIcon size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Background check
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Background check"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>We are processing your background check. We will send you a message if we need more information.</li>
                </ul>
              </div>

              {/* 7. Final decision */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Scale size={22} style={{ color: '#26374a' }} />
                  <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#26374a' }}>
                    Final decision
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#26374a',
                      color: '#fff',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    title="Help on Final decision"
                  >
                    ?
                  </span>
                </div>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: '46px', color: '#333', fontSize: '15px' }}>
                  <li>December 18, 2024 Your application is in progress. We will send you a message once the final decision has been made.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* SECTION 2: MESSAGES ABOUT YOUR APPLICATION (Matches Screenshot Exactly) */}
          <section style={{ marginBottom: '40px', marginTop: '40px' }}>
            <div className="row">
              <div className="col-xs-12">
                <h2
                  style={{
                    fontSize: '26px',
                    fontWeight: '700',
                    color: '#26374a',
                    marginTop: '10px',
                    marginBottom: '12px',
                  }}
                >
                  Messages about your application
                </h2>

                {/* Notice Banner */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '18px',
                    fontSize: '15px',
                    color: '#333',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#31708f',
                      color: '#ffffff',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}
                  >
                    i
                  </span>
                  <span>
                    Links and document titles are shown in the language you chose for your portal account when they were generated.
                  </span>
                </div>
              </div>
            </div>

            {/* Table Control Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '10px',
                fontSize: '14px',
                color: '#333',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <label htmlFor="msg-search-input" style={{ fontWeight: 'normal', marginBottom: 0 }}>
                  Search:
                </label>
                <input
                  id="msg-search-input"
                  type="text"
                  value={msgSearch}
                  onChange={(e) => setMsgSearch(e.target.value)}
                  style={{
                    border: '1px solid #aaa',
                    padding: '3px 8px',
                    fontSize: '14px',
                    width: '180px',
                    height: '30px',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>
                  Showing 1 to {filteredMessages.length} of {messagesList.length} entries
                </span>
                <span style={{ margin: '0 4px', color: '#888' }}>|</span>
                <label htmlFor="msg-entries-select" style={{ fontWeight: 'normal', marginBottom: 0 }}>
                  Show
                </label>
                <select
                  id="msg-entries-select"
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  style={{
                    border: '1px solid #aaa',
                    padding: '2px 6px',
                    fontSize: '14px',
                    height: '30px',
                    backgroundColor: '#fff',
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                </select>
                <span>entries</span>
              </div>
            </div>

            {/* Messages Data Table */}
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  backgroundColor: '#fff',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '2px solid #ccc', color: '#222', backgroundColor: '#f5f5f5' }}>
                    <th
                      style={{
                        padding: '10px 12px',
                        borderRight: '1px solid #ccc',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '55%',
                      }}
                    >
                      Subject <span style={{ marginLeft: '4px', color: '#666', fontSize: '12px' }}>↓↑</span>
                    </th>
                    <th
                      style={{
                        padding: '10px 12px',
                        borderRight: '1px solid #ccc',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '22%',
                        backgroundColor: '#e5e5e5',
                      }}
                    >
                      Date sent <span style={{ marginLeft: '4px', color: '#000', fontSize: '13px' }}>↓</span>
                    </th>
                    <th
                      style={{
                        padding: '10px 12px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '23%',
                      }}
                    >
                      Date read <span style={{ marginLeft: '4px', color: '#666', fontSize: '12px' }}>↓↑</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.map((row, idx) => (
                    <tr
                      key={row.id}
                      style={{
                        borderBottom: '1px solid #eee',
                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f9f9f9',
                      }}
                    >
                      <td style={{ padding: '10px 12px', borderRight: '1px solid #eee' }}>
                        <button
                          onClick={() => setSelectedMessage(row)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#284162',
                            textDecoration: 'underline',
                            padding: 0,
                            fontSize: '14px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontWeight: 'normal',
                          }}
                        >
                          {row.subject}
                        </button>
                      </td>
                      <td style={{ padding: '10px 12px', borderRight: '1px solid #eee', color: '#333' }}>
                        {row.dateSent}
                      </td>
                      <td style={{ padding: '10px 12px', color: '#333' }}>
                        {row.dateRead}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <button
                style={{
                  backgroundColor: '#284162',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '3px',
                  padding: '6px 14px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'default',
                }}
              >
                1
              </button>
            </div>

          </section>

          {/* Message Document Viewer Modal */}
          {selectedMessage && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                padding: '20px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  maxWidth: '650px',
                  borderRadius: '6px',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#26374a',
                    color: '#fff',
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                    {selectedMessage.subject}
                  </h3>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#fff',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    ×
                  </button>
                </div>
                
                <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'auto', fontSize: '14px', lineHeight: '1.6', color: '#222' }}>
                  <div style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                    <div><strong>From:</strong> {selectedMessage.sender}</div>
                    <div><strong>Date Sent:</strong> {selectedMessage.dateSent}</div>
                    <div><strong>Application Number:</strong> V309284019</div>
                  </div>
                  
                  <pre style={{ fontFamily: 'Noto Sans, sans-serif', whiteSpace: 'pre-wrap', margin: 0, backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
                    {selectedMessage.content}
                  </pre>
                </div>

                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    padding: '12px 20px',
                    borderTop: '1px solid #ddd',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <button
                    onClick={() => alert(`Downloading PDF copy of ${selectedMessage.subject}...`)}
                    style={{
                      backgroundColor: '#e1e4e7',
                      color: '#26374a',
                      border: '1px solid #bbb',
                      padding: '6px 14px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Download size={14} /> Download PDF
                  </button>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    style={{
                      backgroundColor: '#284162',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 16px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Page Feedback Action Box */}
          <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>
            <div className="col-xs-12">
              <button
                style={{
                  backgroundColor: '#eaebed',
                  color: '#284162',
                  border: '1px solid #ccc',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'normal',
                  cursor: 'pointer',
                }}
                onClick={() => alert('Feedback form triggered')}
              >
                Report a problem or mistake on this page
              </button>
            </div>
          </div>

          {/* Bottom Action Link */}
          <div className="row" style={{ marginTop: '10px', borderTop: '1px solid #ddd', paddingTop: '15px' }}>
            <div className="col-xs-12">
              <Link to="/mycic/home" style={{ color: '#284162', textDecoration: 'underline', fontWeight: 'bold', fontSize: '15px' }}>
                ← Return to account home
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
