import  { useContext } from "react";
import NavBar from "../components/NavBar";
import "../App.css";
import "./newEntry.css";
import AppFooter from "../Pages/AppFooter";
import { DataContext } from "./DataContextProvider";

function NewEntry() {
  const {
    date,
    setDate,
    specification,
    setSpecification,
    name,
    setName,
    street,
    setStreet,
    ZIP,
    setZIP,
    city,
    setCity,
    country,
    setCountry,
    phone,
    setPhone,
    email,
    setEmail,
    text,
    setText,
    resetInput,
    createData,
  } = useContext(DataContext);

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
            placeholder="Doctor´s specification"
            className="entry space"
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
          />
          <div className="flexEntries space">
            <input
              type="text"
              placeholder="Name"
              className="entry"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Street name and number"
              className="entry"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="flexEntries space">
            <input
              type="number"
              placeholder="ZIP"
              className="entry"
              value={ZIP}
              onChange={(e) => setZIP(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="entry"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Country"
            className="entry space"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <div className="flexEntries space">
            <input
              type="text"
              placeholder="Telephone Number"
              className="entry"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-Mail"
              className="entry"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="ChildDiv">
          <input
            type="text"
            placeholder="Notes/Remarks ★"
            className="MainEntry"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div className="BottomButtons">
        <button className="CancelButton" onClick={resetInput} type="submit">
          Cancel
        </button>
        <button className="SaveButton" onClick={createData} type="submit">
          Save
        </button>
      </div>

      <AppFooter />
    </>
  );
}

export default NewEntry;
