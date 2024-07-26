import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import "../App.css";
import "./newEntry.css";
import axios from "axios";
import AppFooter from "../Pages/AppFooter";

function NewEntry() {
  const baseUrl = "http://localhost:3001/names";
  const [APIData, setAPIData] = useState([]);

  const [id, setID] = useState("");
  const [date, setDate] = useState("");
  const [specification, setSpecification] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [ZIP, setZIP] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
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
      date,
      specification,
      name,
      street,
      ZIP,
      city,
      country,
      phone,
      email,
      text,
      id,
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
    setDate(APIData[index].date);
    setSpecification(APIData[index].specification);
    setStreet(APIData[index].street);
    setZIP(APIData[index].ZIP);
    setCity(APIData[index].city);
    setCountry(APIData[index].country);
    setPhone(APIData[index].phone);
    setName(APIData[index].name);
    setEmail(APIData[index].email);
    setText(APIData[index].text);
  };
  // update dataset by user modification
  const updateData = async () => {
    // alert("update ID " + id)
    const request = axios.put(`${baseUrl}/${id}`, {
      date,
      specification,
      name,
      street,
      ZIP,
      city,
      country,
      phone,
      email,
      text,
      id,
    });
    const response = await request;
    console.log(response.data);
    // read in updated json file via function
    fetchNames();
    setEditmode(false);
    resetInput();
  };

  const resetInput = () => {
    setID("");
    setDate("");
    setSpecification("");
    setStreet("");
    setZIP("");
    setCity("");
    setCountry("");
    setPhone("");
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <>
      <NavBar />
      <div className="mainDiv">
        <div className="ChildDiv">
          <h2 className="blackish">Examination</h2>
          <input
            type="text"
            placeholder="Date of exam"
            className="entry space"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h2 className="blackish">Doctor´s information</h2>
          <input
            type="text"
            placeholder="Doctor´s specification   "
            className="entry space"
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
          />
          <div className="flexEntries space">
            <input type="text" placeholder="Name" className="entry" />
            <input
              type="text"
              placeholder="Street name and number"
              className="entry"
              value={street}
            onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="flexEntries space">
            <input type="number" placeholder="ZIP" className="entry" value={ZIP} onChange={(e) => setZIP(e.target.value)}/>
            <input type="text" placeholder="City" className="entry" value={city} onChange={(e) => setCity(e.target.value)}/>
          </div>
          <input type="text" placeholder="Country" className="entry space" value={country} onChange={(e) => setCountry(e.target.value)}/>
          <div className="flexEntries space">
            <input
              type="text"
              placeholder="Telephone Number"
              className="entry"
              value={phone} onChange={(e) => setPhone(e.target.value)}
            />
            <input type="text" placeholder="E-Mail" className="entry" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className="ChildDiv">
          <input
            type="text"
            placeholder="Notes/Remarks  ★"
            className="MainEntry"
            value={text} onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div className="BottomButtons">
          <button className="CancelButton" onClick={resetInput} type="submit">Cancel</button>
          <button className="SaveButton" onClick={createData} type="submit">Save</button>
        </div>

        <AppFooter />


      {/* <div className="App">
        <div className="userinput"> */}
          {/* <label htmlFor="name">Name</label>
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
          /> */}
          {/* Conditional rendering for edit mode or add mode */}
          {/* {editmode ? (
            <button onClick={updateData} type="submit">
              {" "}
              Update this dataset{" "}
            </button>
          ) : (
            <button onClick={createData} type="submit">
              {" "}
              Add new dataset{" "}
            </button>
          )} */}

         
        {/* </div>

      </div> */}
    </>
  );
}

export default NewEntry;
