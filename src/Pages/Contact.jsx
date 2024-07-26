import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import "../App.css";

function Contact() {
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
          <p className="blackish">Book that appointment</p>
        </div>
        <div>
          <img src="./src/images/Blog post article.png" alt="blog" />
          <p className="blackish">
            Read medical articles <br />
            about medical issue.
          </p>
        </div>
        <div>
          <img src="./src/images/small cell phone.png" alt="handy" />
          <p className="blackish">
            Fast contact to medical <br />
            practice
          </p>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default Contact;
