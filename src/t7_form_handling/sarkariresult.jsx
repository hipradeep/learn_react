import React from 'react';

const jobs = [
  {
    title: 'UPSC Civil Services 2025',
    date: '03 May 2025',
    link: 'https://www.sarkariresult.com/upsc/upsc-civil-services/',
  },
  {
    title: 'Railway Group D Recruitment',
    date: '02 May 2025',
    link: 'https://www.sarkariresult.com/railway/railway-group-d/',
  },
  {
    title: 'SSC GD Constable Notification',
    date: '01 May 2025',
    link: 'https://www.sarkariresult.com/ssc/ssc-gd-constable/',
  },
];

export default function SarkariResult() {
  return (
    <div className="sarkari-container">
      <style>{`
        .sarkari-container {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          min-height: 100vh;
          padding: 20px;
        }

        .header {
          background-color: #b71c1c;
          color: white;
          padding: 20px;
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          border-radius: 6px;
        }

        .main {
          margin-top: 30px;
        }

        .main h2 {
          font-size: 22px;
          margin-bottom: 15px;
          color: #333;
        }

        .job-list {
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .job-list li {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
          transition: background-color 0.2s;
        }

        .job-list li:hover {
          background-color: #fafafa;
        }

        .job-link {
          color: #1976d2;
          text-decoration: none;
        }

        .job-link:hover {
          text-decoration: underline;
        }

        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 14px;
          color: #777;
        }
      `}</style>

      <header className="header">Sarkari Result</header>

      <main className="main">
        <h2>Latest Job Updates</h2>
        <ul className="job-list">
          {jobs.map((job, index) => (
            <li key={index}>
              <a href={job.link} className="job-link" target="_blank" rel="noopener noreferrer">
                {job.title}
              </a>
              <span className="job-date">{job.date}</span>
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        © 2025 Sarkari Result. All Rights Reserved.
      </footer>
    </div>
  );
}
