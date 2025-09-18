import { useState, useEffect } from 'react';
import "../css/ResultsPage.css";
import header from "../assets/header.png";
import captachadata from '../CaptachaData';
import retry from "../assets/retry.png"
import allStudentsData from "../studentData"
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const [currentCaptcha, setCurrentCaptcha] = useState(null);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const [usnInput, setUsnInput] = useState('');
  const [error, setError] = useState('');
  const [studentResult, setStudentResult] = useState(null);

  const getRandomCaptcha = () => {
    const randomIndex = Math.floor(Math.random() * captachadata.length);
    return captachadata[randomIndex];
  };

  useEffect(() => {
    loadNewCaptcha();
  }, []);

  const loadNewCaptcha = () => {
    const newCaptcha = getRandomCaptcha();
    setCurrentCaptcha(newCaptcha);
    setUserInput('');
  };

  const validateCaptcha = () => {
    if (!currentCaptcha || !userInput.trim()) {
      setError('Please fill out this field.');
      return false;
    }
    
    if (userInput.toLowerCase().trim() === currentCaptcha.value.toLowerCase().trim()) {
      return true;
    } else {
      setError('Incorrect captcha. Please try again.');
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudentResult(null);
    setError('');

    if (!validateCaptcha()) {
      return;
    }

    const usnFormatRegex = /^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/i;
    if (!usnInput || !usnFormatRegex.test(usnInput)) {
      setError('Wrong USN format. Please enter a valid USN (e.g., 1JS22IS062).');
      return;
    }

    const foundStudent = allStudentsData.find(
      (student) => student.usn.toLowerCase() === usnInput.toLowerCase()
    );

    if (foundStudent) {
      navigate('/vtuJJ25', { state: { student: foundStudent } });
    } else {
      setError('No such USN found.');
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setUserInput('');
    setUsnInput('');
    setError('');
    loadNewCaptcha();
  };

  return (
    <form className='result_page_container' onSubmit={handleSubmit}>
      <div className="header row">
        <img src={header} alt="" className='header_img' />
      </div>

      <div className="result">
        <div className="row2 row">
          <div className="text_container">
            <p className="kannda_texth">ವಿ.ತಾ.ವಿ ಸಾಮಯಿಕ ಫಲಿತಾಂಶ.</p>
            <p className="english_texth">VTU PROVISIONAL RESULT.</p>
          </div>
        </div>

        <div className="row3 row">
          <div className="details_container">
            <div className="result_details">
              <p className="kannda_textm">ಡಿಸೆಂಬರ್-೨೦೨೪ / ಜನವರಿ-೨೦೨೫ ಪರೀಕ್ಷೆಯ ಫಲಿತಾಂಶ.</p>
              <p className="english_textm">December-2024 / January-2025 EXAMINATION RESULTS.</p>
            </div>

            <div className="input_details">
              <div className="usn_input">
                <input 
                  type="text" 
                  placeholder='  ENTER USN' 
                  className='usn input'
                  value={usnInput}
                  onChange={(e) => setUsnInput(e.target.value)}
                />
              </div>

              <div className="cache_input">
                <div className="captache_div captache_enter">
                  <input 
                    type="text" 
                    placeholder='  Enter Captcha Code' 
                    className='code input'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                  />
                </div>
                <div className="captache_div captache_holder">
                  <img 
                    src={currentCaptcha ? currentCaptcha.image : ''} 
                    alt="Captcha" 
                    className="captache" 
                  />
                  <button 
                    type="button"
                    className="refresh"
                    onClick={loadNewCaptcha}
                    title="Refresh Captcha"
                  >
                    <img src={retry} alt="" className='retry' />
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="error_message" style={{color: 'red', margin: '10px 0'}}>
                {error}
              </div>
            )}

            <div className="button_container">
              <button 
                type="submit"
                className="proceed submit"
              >
                ಸಲ್ಲಿಸಿ / SUBMIT
              </button>
              <button 
                type="button"
                className="proceed cancel"
                onClick={handleCancel}
              >
                ರದ್ದುಮಾಡಿ / CANCEL
              </button>
            </div>
          </div>
        </div>

        <div className="row4 row">
          <p className="kannda_textm">© ೨೦೨೫ ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು ಯೋಜನಾ ನಿರ್ವಹಣೆ ವಿಭಾಗ (ಪಿ. ಎಂ. ಸಿ), ವಿ.ತಾ.ವಿ, ಬೆಳಗಾವಿ. ಕರ್ನಾಟಕ. ಭಾರತ.</p>
          <p className="english_textm">© 2025 Designed & Developed by Project Management Cell (PMC), VTU, Belagavi. Karnataka. India.</p>
        </div>
      </div>
    </form>
  );
};

export default ResultPage;