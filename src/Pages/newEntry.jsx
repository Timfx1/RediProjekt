import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import ShowEntries from "./ShowEntries";
import AppFooter from "../Pages/AppFooter";




function NewEntry() {
    const baseUrl = "http://localhost:3001/names";
    const [APIData, setAPIData] = useState([]);
  
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
    const [editmode, setEditmode] = useState(false);
  
    // function to read in json file and store in useState
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
  
    // create new dataset with user input stored in useStates name, email, text
    const createData = async () => {
      const request = axios.post(`${baseUrl}`, {
        name,
        email,
        text,
      });
      const response = await request;
      console.log(response.data);
      // read in changed json file via function
      fetchNames();
    };
  
    // delete dataset by user choice
    const deleteData = async (id) => {
      const request = axios.delete(`${baseUrl}/${id}`);
      const response = await request;
      console.log(response.data);
      // read in changed json file via function
      fetchNames();
    };
  
    // show selected dataset by user in input fields for modification
    const editData = async (id, index) => {
      // alert("edit ID " + id +" and Index " + index)
      setEditmode(true);
      setID(APIData[index].id);
      setName(APIData[index].name);
      setEmail(APIData[index].email);
      setText(APIData[index].text);
    };
    // update dataset by user modification
    const updateData = async () => {
      // alert("update ID " + id)
      const request = axios.put(`${baseUrl}/${id}`, {
        name,
        email,
        text,
      });
      const response = await request;
      console.log(response.data);
      // read in updated json file via function
      fetchNames();
      setEditmode(false);
      resetInput();
    };
  
    const resetInput = () => {
      setName("");
      setEmail("");
      setText("");
    };
  
  
  
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="userinput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* Conditional rendering for edit mode or add mode */}
          {editmode ? (
            <button onClick={updateData} type="submit">
              {" "}
              Update this dataset{" "}
            </button>
          ) : (
            <button onClick={createData} type="submit">
              {" "}
              Add new dataset{" "}
            </button>
          )}

          <button onClick={resetInput} type="submit">
            {" "}
            Clear entry fields
          </button>
        </div>

        <ShowEntries APIDate={APIData} editData={editData} deleteData={deleteData}/>

        <AppFooter />
    

        
      </div>
      
     
    </>
  );
}

export default NewEntry;