import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import "../App.css";

function Home() {
  return (
    <>
      <NavBar />

      <div className="long">
          <div id="toppurple">
            <h1>
              Your medical <br />assistant
            </h1>
            <p>Keep your data with you, anywhere, everywhere</p>
        </div>

        <div className="absolute middlepic"></div>
        <div className="othermiddlepic"></div>
      </div>
      
      <div className="Bgim">
        <h2>Take your medical notes into your own hands</h2>
        <button id="btnnew">Start writing</button>
      </div>

      <div className="hjh">
        <h3>How we work </h3>
        <div className="motherdiv">
          <div className=" sameColor childDiv">
            <p>
              Create an account <br /> and verify it with our <br /> secret
              pascode
            </p>
            <img src="./src/images/young women standing.png" alt="come" />
          </div>
          <div className=" sameColor childDiv">
            <p>
              {" "}
              Select the particularcategory <br /> of information your <br />{" "}
              interested in{" "}
            </p>
            <img src="./src/images/search window.png" alt="come" />
          </div>
        </div>
        <div className=" sameColor childdiv2">
          <p>Get Started....</p>
        </div>
      </div>

      <div className="hjg">
        <img src="./src/images/Group 53.png" alt="hello" />
        <p>
          Let´s reach you where you are <br />
          Search for clinics near you
        </p>
      </div>

      <AppFooter />
    </>
  );
}

export default Home;
