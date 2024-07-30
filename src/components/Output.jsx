import React from "react";
import "../Pages/newEntry.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Output({ APIData, deleteData, editData }) {
  return (
    <div>
      <h2>Datasets from Json Server are now:</h2>
      {APIData?.map((data, index) => (
        <div key={index}>
          <div className="spaceBtn">
            <h2 className="blackish">Entries</h2>
            <div className="spaceAround">
              <h4>View</h4>
              <i className="fas fa-table" style={{ color: "black" }}></i>
              <i className="fas fa-filter" style={{ color: "black" }}></i>
              <i className="fas fa-sort" style={{ color: "black" }}></i>
            </div>
          </div>
          <div key={index}>
            <p className="smallText">Last update: {data.date}</p>
            <div className="ViewDetails">
              <p className="inputTe">{data.text}</p>
              <div className="BottomButtons">
                <button
                  className="SaveButton"
                  onClick={() => editData(data.id, index)}
                  type="submit"
                >
                  VIEW UPDATE
                </button>
                <button className="CancelButton">SHARE</button>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ color: "black" }}
                  onClick={() => deleteData(data.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
