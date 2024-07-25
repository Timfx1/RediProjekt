
// eslint-disable-next-line react/prop-types
export default function Output({APIData, editData, deleteData}) {

  
  return (
    <div>
      <h2>Datasets from Json Server are now:</h2>
      {APIData?.map((data, index) => (
        
        <div className="dataset_container" key={index}>
          <h3>{data.id}</h3>
          <h3>{data.name}</h3>
          <h3>{data.email}</h3>
          {/* index to identify dataset index for copy fill in on input fields above */}
          <button onClick={() => editData(data.id, index)}>Edit</button>
          <button onClick={() => deleteData(data.id)}>Del</button>
        </div>
      ))}
    </div>
  )
}
