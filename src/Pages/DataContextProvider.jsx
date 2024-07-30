import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Create a context for data management
export const DataContext = createContext();

const DataContextProvider = (props) => {
  const baseUrl = "http://localhost:3001/names";
  
  // State variables for managing data and form inputs
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

  // Fetch names from the API
  const fetchNames = useCallback(async () => {
    try {
      const response = await axios.get(baseUrl);
      setAPIData(response.data);
    } catch (error) {
      console.error('Error fetching names:', error);
    }
  }, []);

  // Fetch names on component mount
  useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  // Create new data entry
  const createData = async () => {
    try {
      const newID = uuidv4(); // Generate a new unique ID
      await axios.post(baseUrl, {
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
        id: newID,
      });
      fetchNames(); // Refresh data after creation
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  // Delete an existing data entry
  const deleteData = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchNames(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  // Set data for editing
  const editData = (id, index) => {
    setEditmode(true);
    const entry = APIData[index];
    setID(entry.id);
    setDate(entry.date);
    setSpecification(entry.specification);
    setStreet(entry.street);
    setZIP(entry.ZIP);
    setCity(entry.city);
    setCountry(entry.country);
    setPhone(entry.phone);
    setName(entry.name);
    setEmail(entry.email);
    setText(entry.text);
  };

  // Fetch data by ID
  const fetchDataById = useCallback(async (id) => {
    try {
      const response = await fetch(`/api/entries/${id}`);
      if (!response.ok) {
        throw new Error(`Error fetching data by ID: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data by ID:', error);
    }
  }, []);

  // Update existing data entry
  const updateData = async () => {
    try {
      await axios.put(`${baseUrl}/${id}`, {
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
      fetchNames(); // Refresh data after update
      setEditmode(false);
      resetInput(); // Reset form fields
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Reset form fields
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

  // Provide context values
  return (
    <DataContext.Provider value={{
      fetchNames,
      updateData,
      createData,
      deleteData,
      editData,
      editmode,
      fetchDataById,
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
