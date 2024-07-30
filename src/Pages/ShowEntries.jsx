import  { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import AppFooter from "../Pages/AppFooter";
import Output from "../components/Output";
import { DataContext } from "./DataContextProvider";

export default function ShowEntries() {
  const { APIData, fetchNames, deleteData} = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNames().then(() => setLoading(false));
  }, [fetchNames]);

  const handleEdit = (id) => {
    navigate(`/NewEntry/${id}`);
  };

  return (
    <div>
      <NavBar />
      {!loading && APIData.length > 0 ? (
        <Output APIData={APIData}  handleEdit={handleEdit} deleteData={deleteData} />
      ) : (
        <p>Loading...</p>
      )}
      <AppFooter />
    </div>
  );
}
