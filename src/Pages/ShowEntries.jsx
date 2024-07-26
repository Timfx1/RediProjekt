import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import Output from "../components/Output";
import { useEffect, useState } from "react";
import axios from "axios";


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