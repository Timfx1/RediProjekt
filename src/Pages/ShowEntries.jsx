import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import Output from "../components/Output";
import { useEffect, useState } from "react";
import axios from "axios";
import "./newEntry.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ShowEntries() {
  const baseUrl = "http://localhost:3001/names";
  const [APIData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchNames = async () => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      setAPIData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNames();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="spaceBtn">
        <h2 className="blackish">Entries</h2>
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
          <p></p>
          <div className="BottomButtons">
            <button className="SaveButton">VIEW UPDATE</button>
            <button className="CancelButton">SHARE</button>
              <FontAwesomeIcon icon={faTrashAlt} style={{ color: "black" }}/>          
              </div>
        </div>
      </div>
      {!loading && APIData.length > 0 ? (
        <Output
          APIData={APIData}
          editData={() => void 0}
          deleteData={() => void 0}
        />
      ) : (
        <p>Loading...</p>
      )}
      <AppFooter />
    </div>
  );
}