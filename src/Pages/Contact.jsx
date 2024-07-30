import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import "../App.css";

function Contact() {
  const emergencyNumber = '911';
  const url1= "https://www.nature.com/srep/calls-for-papers?subject=Medicine&gad_source=1&gclid=CjwKCAjwnqK1BhBvEiwAi7o0X6HXYLeDr1AUJdDAwRq-j9NAQnEaMxBtpJgH0SL8eCkZqbp7UIoLTxoCEn8QAvD_BwE"
const url2="https://www.doctolib.de/?locale=en"
  return (
    <>
      <NavBar />
      <div className="Groupphoto">
        <h1 >
          We are <br />
          where you are
        </h1>

        <div className="parent-container">
          <div className="split-input-wrapper">
            <input type="text" className="split-input" placeholder=" Doctor, specialty, practice" />
            <div className="divider"></div>
            <input type="text" className="split-input" placeholder="Where" />
          </div>
        </div>

      </div>

      <div className="bottomContact">
        <div>
          <img src="./src/images/calendar with writings.png" alt="calendar" />
          <a href={url2} className="blackish still-here" target="_blank" rel="noopener noreferrer">
         Book an <br />
          appointment.
    </a>
        </div>
        <div>
          <img src="./src/images/Blog post article.png" alt="blog" />
          <a href={url1} className="blackish still-here" target="_blank" rel="noopener noreferrer">
          Read medical articles <br />
          about medical issue.
    </a>

        </div>
        <div>
          <img src="./src/images/small cell phone.png" alt="handy" />
        

          <a href={`tel:${emergencyNumber}`}  className="blackish still-here" target="_blank" rel="noopener noreferrer">
          Fast contact to medical <br />
            practice
    </a>

   

        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Contact;
