import { createContext, useState, useEffect, useCallback } from 'react';
import axios from "axios";

export const DataContext = createContext();

const DataContextProvider = (props) => {
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

  const fetchNames = useCallback(async () => {
    const response = await axios.get(baseUrl);
    setAPIData(response.data);
  }, []);

  useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  const createData = async () => {
    const response = await axios.post(baseUrl, {
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
    fetchNames();
  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    fetchNames();
  };

  const editData = (id, index) => {
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

  const updateData = async () => {
    const response = await axios.put(`${baseUrl}/${id}`, {
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
    <DataContext.Provider value={{
      fetchNames, // <-- Add fetchNames to the context
      updateData,
      createData,
      deleteData,
      editData,
      editmode,
      resetInput,
      APIData,
      setAPIData,
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
      setText
    }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
