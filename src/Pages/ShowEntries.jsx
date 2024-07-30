import  { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AppFooter from "../Pages/AppFooter";
import Output from "../components/Output";
import { DataContext } from "./DataContextProvider";

export default function ShowEntries() {
  const { APIData, fetchNames, deleteData, editData } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNames().then(() => setLoading(false));
  }, [fetchNames]);

  return (
    <div>
      <NavBar />
      {!loading && APIData.length > 0 ? (
        <Output APIData={APIData} editData={editData} deleteData={deleteData} />
      ) : (
        <p>Loading...</p>
      )}
      <AppFooter />
    </div>
  );
}
