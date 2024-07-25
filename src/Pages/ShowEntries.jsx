import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import Output from "../components/Output";
import { useEffect, useState } from "react";
import axios from "axios";
import "./newEntry.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ShowEntries() {
  const baseUrl = "http://localhost:3001/names";
  const [APIData, setAPIData] = useState([]);

  const fetchNames = async () => {
    const request = axios.get(baseUrl);

    const response = await request;
    console.log(response.data);
    setAPIData(response.data);
  };
  //   read in json file via function above when component is mounted
  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="spaceBtn">
        <h2>Entries</h2>
        <div className="spaceAround">
          <h4>View</h4>
          <i className="fas fa-table" style={{ color: "black" }}></i>
          <i className="fas fa-filter" style={{ color: "black" }}></i>
          <i className="fas fa-sort" style={{ color: "black" }}></i>
        </div>
      </div>
      <div>
        <p className="smallText">Last update: DD.MM.YYYY , 00:00</p>
        <div className="ViewDetails">
          <p>gjgfjgjkghghjgh</p>
          <div className="BottomButtons">
            <button className="SaveButton">VIEW UPDATE</button>
            <button className="CancelButton">
              SHARE  
              <i className="fas fa-share" style={{ color: "black" }}></i>
            </button>
            <i className="fa-trash-alt" style={{ color: "black" }}></i>
          </div>
        </div>
      </div>

      <Output
        APIDate={APIData}
        editData={() => void 0}
        deleteData={() => void 0}
      />

      <AppFooter />
    </div>
  );
}
