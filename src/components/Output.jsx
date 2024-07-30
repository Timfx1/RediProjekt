import "../Pages/newEntry.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Output({ APIData, deleteData, handleEdit }) {
 
  const handleShare = (data) => {
    if (navigator.share) {
      navigator.share({
        title: 'Medical Note',
        text: data.text,
        url: window.location.href,
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Sharing failed', error));
    } else {
      // alert('Web Share API is not supported in your browser.');
      
      // Fallback for unsupported browsers
       const textToShare = `Title: Medical Note\nText: ${data.text}\nURL: ${window.location.href}`;
       navigator.clipboard.writeText(textToShare).then(() => {
         alert('Text copied to clipboard. You can now paste it to share.');
       }).catch((error) => {
         alert('Failed to copy text: ' + error);
       });
    }
  };
  
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
                  onClick={() => handleEdit(data.id, index)}
                  type="submit"
                >
                  VIEW UPDATE
                </button>
                <button className="CancelButton" onClick={() => handleShare(data)}>SHARE</button>
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
