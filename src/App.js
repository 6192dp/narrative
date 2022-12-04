import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountrySelection from "./components/CountrySelection";
import BuyOrders from "./routes/BuyOrders";
import DataSets from "./routes/Datasets";
import EditBuyOrder from "./routes/BuyOrderDetails";

function App() {
  const [selectedCountries, updateSelectedCountries] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BuyOrders />} selectedCountries={selectedCountries} />
        <Route exact path="/datasets" element={<DataSets />} selectedCountries={selectedCountries} />
        <Route exact path="/edit" element={<EditBuyOrder />} />
      </Routes>
      <CountrySelection selectedCountries={selectedCountries} updateSelectedCountries={updateSelectedCountries} />
    </BrowserRouter>
  )
}

export default App;