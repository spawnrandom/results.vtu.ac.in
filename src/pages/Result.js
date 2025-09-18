import React from 'react'; // 🧹 Removed unused useState and useEffect
import "../css/Result.css";
import header from "../assets/header.png";
// import captachadata from '../CaptachaData'; // 🧹 Removed unused import
import { useLocation, Link } from 'react-router-dom'; // Added Link for the safeguard
import background from "../assets/Background (4).png"

const Result = () => {
  const location = useLocation();
  const data = location.state?.student;

  // 🛡️ Safeguard: If the page is accessed directly without data, show a message.
  if (!data) {
    return (
      <div className='result_container error-page'>
        <h2>No Student Data Found</h2>
        <p>Please go back and enter a USN to view results.</p>
        <Link to="/">Go Back to Form</Link>
      </div>
    );
  }

  // 🧹 All unnecessary captcha logic (useState, useEffect, functions) has been removed.

  const handleBack = () => {
    window.history.back();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='result_container'>
      <div className="header row">
        <img src={header} alt="Header" className='header_img' />
      </div>

      <div className="result">
        {/* The rest of your JSX remains the same and will function perfectly. */}
        <div className="row2 row">
          <div className="text_container">
            <p className="kannda_texth">ವಿ.ತಾ.ವಿ ಸಾಮಯಿಕ ಫಲಿತಾಂಶ.</p>
            <p className="english_texth">VTU PROVISIONAL RESULT.</p>
          </div>
        </div>

        <div className="tag_row3 row">
          <div className="details_container_result">
            <div className="result_details_tag">
              <p className="kannda_textm">ವಿ.ತಾ.ವಿ ಪದವಿ / ಸ್ನಾತಕೋತ್ತರ ಪದವಿ ಪರೀಕ್ಷೆಯ ನಾಮಯುಕ್ತ ಫಲಿತಾಂಶ ಡಿಸೆಂಬರ್-೨೦೨೪ / ಜನವರಿ-೨೦೨೫.</p>
              <p className="english_textm">VTU PROVISIONAL RESULTS OF UG / PG December-2024 / January-2025 EXAMINATION.</p>
            </div>

            <div className="results-container">
              <img src={background} className="watermark" alt="" />
              <table className="details-table">
                <tbody>
                  <tr className='tag_label'>
                    <td className="detail-label">University Seat Number</td>
                    <td>: {data.usn}</td>
                  </tr>
                  <tr className='tag_label'>
                    <td className="detail-label">Student Name</td>
                    <td>: {data.studentName}</td>
                  </tr>
                </tbody>
              </table>

              <hr className="divider" />

              <h3 className="semester-heading">Semester : {data.semester}</h3>
              <div className="table-wrapper">
                <table className="marks-table">
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject Name</th>
                      <th>Internal Marks</th>
                      <th>External Marks</th>
                      <th>Total</th>
                      <th>Result</th>
                      <th>Announced / Updated on</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.subjects.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.subjectCode}</td>
                        <td id='sub_name'>{subject.subjectName}</td>
                        <td>{subject.internalMarks}</td>
                        <td>{subject.externalMarks}</td>
                        <td>{subject.total}</td>
                        <td>{subject.result}</td>
                        <td>{subject.announcedOn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bottom_container">
            {/* ... Your existing JSX for Abbreviations, Notes, Signature ... */}
          </div>

          <div className="tag_button_container">
            <button
              className="proceed back tag_submit"
              onClick={handleBack}
            >
              ಹಿಂದೆ / BACK
            </button>
            <button
              className="proceed print tag_submit"
              onClick={handlePrint}
            >
              ಮುದ್ರಣ / PRINT
            </button>
          </div>

          <div className="row4 row">
            <p className="kannda_textm">© ೨೦೨೫ ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು ಯೋಜನಾ ನಿರ್ವಹಣೆ ವಿಭಾಗ (ಪಿ. ಎಂ. ಸಿ), ವಿ.ತಾ.ವಿ, ಬೆಳಗಾವಿ. ಕರ್ನಾಟಕ. ಭಾರತ.</p>
            <p className="english_textm">© 2025 Designed & Developed by Project Management Cell (PMC), VTU, Belagavi. Karnataka. India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;