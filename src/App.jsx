import "./App.css";
import NewEntry from "./Pages/newEntry"
import ShowEntries from "./Pages/ShowEntries"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import DataContextProvider from "./Pages/DataContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return <div >

  <DataContextProvider>

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewEntry" element={<NewEntry />} />
      <Route path="/ShowEntries" element={<ShowEntries />} />
      <Route path="/Locate" element={<Contact />} />
    </Routes>
  </Router>

</DataContextProvider>
</div>

}

export default App;
